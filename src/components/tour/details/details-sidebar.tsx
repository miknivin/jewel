"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { ITourDT } from "@/types/tour-packages-d-t";
import { MinusSvg, PlusSvg } from "@/components/svg";
import { services } from "./../../../utils/data/services";
import { updatePrice } from "@/utils/helper";

interface IProps {
  tour: ITourDT;
}

const DetailsSidebar = ({ tour }: IProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [checkIn, setCheckIn] = useState<string | null>(null);
  const [adultTickets, setAdultTickets] = useState<number>(
    tour.id === 3 ? 2 : 1
  );
  const [childTickets, setChildTickets] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<{
    [key: string]: boolean;
  }>(
    services.reduce((acc, service) => ({ ...acc, [service.name]: false }), {})
  );
  const [totalCost, setTotalCost] = useState<number>(0);

  const router = useRouter();
  const basePrice = Math.round(updatePrice(tour)) || 0; // Assuming tour has a price property

  // Calculate total cost
  useEffect(() => {
    let adjustedAdultCost = adultTickets * basePrice;

    if (tour.id === 3 && adultTickets > 2) {
      adjustedAdultCost =
        2 * basePrice + Math.floor((adultTickets - 2) / 2) * basePrice;
    }

    const childCost = childTickets * basePrice;

    const servicesCost = services.reduce((sum, service) => {
      if (selectedServices[service.name] && service.cost) {
        if (service.name.includes("couple")) {
          return sum + service.cost;
        } else {
          return (
            sum +
            service.cost *
              (tour.id === 3
                ? (adultTickets + childTickets) / 2
                : adultTickets + childTickets)
          );
        }
      }
      return sum;
    }, 0);

    const total = adjustedAdultCost + childCost + servicesCost;
    setTotalCost(total);
  }, [adultTickets, childTickets, selectedServices, basePrice, tour.price]);

  // Navigation handler
  const handleProceedToBook = () => {
    if (!checkIn) {
      alert("Please select a date before proceeding!");
      return;
    }
    router.push("/booking-page");
  };

  // Date picker handlers
  const handleIconClick = () => {
    setIsDatePickerOpen((prevState) => !prevState);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setCheckIn(date.toISOString());
    } else {
      setCheckIn(null);
    }
    setIsDatePickerOpen(false);
  };

  // Service toggle handler
  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };

  return (
    <div className="it-discover-right">
      <div className="it-discover-package mb-60">
        <div className="it-discover-package-item">
          <h3 className="it-discover-package-title">Package Details</h3>
          <div className="it-discover-package-content">
            <div className="it-discover-package-list d-flex align-items-center">
              <span>Date</span>
              <div className="it-discover-package-box d-flex justify-content-between align-items-center">
                <span>
                  <DatePicker
                    selected={checkIn ? new Date(checkIn) : null}
                    onChange={handleDateChange}
                    onFocus={() => setIsDatePickerOpen(true)}
                    placeholderText="Select a Date"
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    open={isDatePickerOpen}
                    onClickOutside={() => setIsDatePickerOpen(false)}
                  />
                </span>
                <div
                  className="it-discover-package-icon"
                  onClick={handleIconClick}
                >
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
              </div>
            </div>

            <div className="it-discover-package-list mt-20">
              <span className="it-discover-tickets">Tickets</span>
              <div className="it-discover-passenger d-flex align-items-center justify-content-between">
                <h3 className="it-discover-passenger-categories">
                  Adults (18+years)
                </h3>
                <div className="it-discover-passenger-quantity d-flex align-items-center">
                  <span
                    className="it-cart-minus"
                    onClick={() =>
                      setAdultTickets(
                        adultTickets > (tour.id === 3 ? 2 : 1)
                          ? adultTickets - (tour.id === 3 ? 2 : 1)
                          : adultTickets
                      )
                    }
                  >
                    <MinusSvg />
                  </span>
                  <input
                    className="it-cart-input"
                    type="text"
                    value={adultTickets}
                    readOnly
                  />
                  <span
                    className="it-cart-plus"
                    onClick={() =>
                      setAdultTickets(adultTickets + (tour.id === 3 ? 2 : 1))
                    }
                  >
                    <PlusSvg />
                  </span>
                </div>
              </div>
              {tour.id !== 3 && (
                <div className="it-discover-passenger d-flex align-items-center justify-content-between">
                  <h3 className="it-discover-passenger-categories">
                    Children (5+years)
                  </h3>
                  <div className="it-discover-passenger-quantity d-flex align-items-center">
                    <span
                      className="it-cart-minus"
                      onClick={() =>
                        setChildTickets(Math.max(0, childTickets - 1))
                      }
                    >
                      <MinusSvg />
                    </span>
                    <input
                      className="it-cart-input"
                      type="text"
                      value={childTickets}
                      readOnly
                    />
                    <span
                      className="it-cart-plus"
                      onClick={() => setChildTickets(childTickets + 1)}
                    >
                      <PlusSvg />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="it-discover-package-service mb-30">
              <h3 className="it-discover-service-title mb-35">
                Additional Services
              </h3>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="it-discover-service-item d-flex align-items-center justify-content-between"
                >
                  <div className="it-discover-service-checkbox d-flex align-items-center">
                    <input
                      type="checkbox"
                      style={{ minWidth: "25px" }}
                      checked={selectedServices[service.name]}
                      onChange={() => toggleService(service.name)}
                      disabled={!service.cost}
                    />
                    <span>{service.name}</span>
                  </div>
                  <div className="it-discover-service-price d-flex justify-content-end">
                    <span style={{ maxWidth: "120px", textAlign: "end" }}>
                      {service.serviceCost}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="it-discover-package-total">
              <h3 className="it-discover-package-total-text mb-30">
                Total Cost:{" "}
                <span>
                  ₹
                  {tour.id === 3
                    ? (totalCost - 45000).toFixed(2)
                    : totalCost.toFixed(2)}
                </span>
              </h3>
              <div className="it-discover-package-proceed">
                <button
                  className="it-btn-primary"
                  onClick={handleProceedToBook}
                >
                  Proceed to Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-discover-info mb-60">
        <h3 className="it-discover-package-title">Tour Information</h3>
        <div className="it-discover-info-box">
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Max Guests</span>
              <h5>Date</h5>
            </div>
          </div>
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Min Age</span>
              <h5>12+</h5>
            </div>
          </div>
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-plane-departure"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Tour Location</span>
              <h5>Kerala</h5>
            </div>
          </div>
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">
                Languages Support
              </span>
              <h5>Global</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSidebar;
