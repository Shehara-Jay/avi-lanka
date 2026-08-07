"use client";

import Link from "next/link";

import {
  FormEvent,
  useState,
} from "react";

import {
  CalendarDays,
  Check,
  LoaderCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
  UserRound,
  Users,
} from "lucide-react";

import { services } from "@/data/services";
import { tours } from "@/data/tours";
import { activities } from "@/data/activities";
import { destinations } from "@/data/destinations";

type BookingFormProps = {
  initialType?: string;
  initialItem?: string;
  initialItemTitle?: string;
  initialTravelDate?: string;
  initialTravelers?: string;
};

type SubmissionStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

const inquiryTypes = [
  {
    value: "service",
    label: "Service",
  },
  {
    value: "tour",
    label: "Excursion / Tour",
  },
  {
    value: "activity",
    label: "Activity",
  },
  {
    value: "destination",
    label: "Destination",
  },
  {
    value: "general",
    label: "General Inquiry",
  },
];

const contactMethods = [
  "WhatsApp",
  "Phone",
  "Email",
];

export default function BookingForm({
  initialType = "",
  initialItem = "",
  initialItemTitle = "",
  initialTravelDate = "",
  initialTravelers = "1",
}: BookingFormProps) {
  const [inquiryType, setInquiryType] =
    useState(initialType || "general");

  const [selectedItem, setSelectedItem] =
    useState(initialItem);

  const [status, setStatus] =
    useState<SubmissionStatus>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  const getAvailableItems = () => {
    switch (inquiryType) {
      case "service":
        return services.map((item) => ({
          value: item.slug,
          label: item.title,
        }));

      case "tour":
        return tours.map((item) => ({
          value: item.slug,
          label: item.title,
        }));

      case "activity":
        return activities.map((item) => ({
          value: item.slug,
          label: item.title,
        }));

      case "destination":
        return destinations.map((item) => ({
          value: item.slug,
          label: item.name,
        }));

      default:
        return [];
    }
  };

  const availableItems =
    getAvailableItems();

  const selectedItemTitle =
    inquiryType === "general"
      ? "General Inquiry"
      : availableItems.find(
          (item) =>
            item.value === selectedItem
        )?.label ||
        initialItemTitle ||
        "";

  const handleTypeChange = (
    value: string
  ) => {
    setInquiryType(value);
    setSelectedItem("");

    setStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const payload = {
      name:
        formData.get("name")?.toString() ??
        "",

      email:
        formData.get("email")?.toString() ??
        "",

      phone:
        formData.get("phone")?.toString() ??
        "",

      contactMethod:
        formData
          .get("contactMethod")
          ?.toString() ?? "",

      type: inquiryType,

      item: selectedItem,

      itemTitle:
        selectedItemTitle,

      travelDate:
        formData
          .get("travelDate")
          ?.toString() ?? "",

      adults:
        formData
          .get("adults")
          ?.toString() ?? "1",

      children:
        formData
          .get("children")
          ?.toString() ?? "0",

      message:
        formData
          .get("message")
          ?.toString() ?? "",
    };

    try {
      const response = await fetch(
        "/api/booking",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to send inquiry."
        );
      }

      setStatus("success");

      setStatusMessage(
        result.message ||
          "Your inquiry has been sent successfully."
      );

      form.reset();

      setInquiryType("general");
      setSelectedItem("");
    } catch (error) {
      console.error(error);

      setStatus("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry. Please try again."
      );
    }
  };

  const fieldClass = `
    w-full
    rounded-[14px]
    border
    border-black/[0.08]
    bg-[#fafbf8]
    px-4
    py-3.5
    text-[12px]
    text-[#182018]
    outline-none
    transition-all
    duration-300
    placeholder:text-black/25
    focus:border-[#90EE90]
    focus:bg-white
    focus:ring-4
    focus:ring-[#90EE90]/10
  `;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
      {/* FORM */}

      <div className="rounded-[28px] border border-black/[0.07] bg-white p-6 md:p-8 lg:p-10">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#90EE90]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
              Tell us about your trip
            </p>
          </div>

          <h2 className="mt-4 text-[clamp(2rem,3vw,3.3rem)] font-semibold tracking-[-0.045em] text-[#182018]">
            Send your inquiry
          </h2>

          <p className="mt-3 max-w-[620px] text-[12px] leading-6 text-black/45">
            Fill in the details below and
            we&apos;ll use them to understand
            your travel plans.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >
          {/* YOUR DETAILS */}

          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
              Your details
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <label>
                <span className="mb-2 flex items-center gap-2 text-[10px] font-medium text-black/55">
                  <UserRound
                    size={13}
                    className="text-[#008000]"
                  />

                  Full name
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className={fieldClass}
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-[10px] font-medium text-black/55">
                  <Mail
                    size={13}
                    className="text-[#008000]"
                  />

                  Email address
                </span>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-[10px] font-medium text-black/55">
                  <Phone
                    size={13}
                    className="text-[#008000]"
                  />

                  Phone / WhatsApp
                </span>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+94..."
                  className={fieldClass}
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-[10px] font-medium text-black/55">
                  <MessageCircle
                    size={13}
                    className="text-[#008000]"
                  />

                  Preferred contact
                </span>

                <select
                  name="contactMethod"
                  defaultValue="WhatsApp"
                  className={fieldClass}
                >
                  {contactMethods.map(
                    (method) => (
                      <option
                        key={method}
                        value={method}
                      >
                        {method}
                      </option>
                    )
                  )}
                </select>
              </label>
            </div>
          </div>

          {/* INTEREST */}

          <div className="border-t border-black/[0.07] pt-7">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
              What are you interested in?
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-[10px] font-medium text-black/55">
                  Inquiry type
                </span>

                <select
                  name="type"
                  value={inquiryType}
                  onChange={(event) =>
                    handleTypeChange(
                      event.target.value
                    )
                  }
                  className={fieldClass}
                >
                  {inquiryTypes.map(
                    (type) => (
                      <option
                        key={type.value}
                        value={type.value}
                      >
                        {type.label}
                      </option>
                    )
                  )}
                </select>
              </label>

              {inquiryType !== "general" && (
                <label>
                  <span className="mb-2 block text-[10px] font-medium text-black/55">
                    Select option
                  </span>

                  <select
                    name="item"
                    required
                    value={selectedItem}
                    onChange={(event) =>
                      setSelectedItem(
                        event.target.value
                      )
                    }
                    className={fieldClass}
                  >
                    <option value="">
                      Select an option
                    </option>

                    {availableItems.map(
                      (item) => (
                        <option
                          key={item.value}
                          value={item.value}
                        >
                          {item.label}
                        </option>
                      )
                    )}
                  </select>
                </label>
              )}
            </div>

            {selectedItemTitle &&
              inquiryType !== "general" && (
                <div className="mt-4 flex items-center gap-3 rounded-[14px] bg-[#eef7ea] px-4 py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#90EE90]/40 text-[#008000]">
                    <Check size={12} />
                  </span>

                  <p className="text-[11px] text-black/55">
                    Selected:{" "}
                    <strong className="font-semibold text-[#182018]">
                      {selectedItemTitle}
                    </strong>
                  </p>
                </div>
              )}
          </div>

          {/* TRAVEL */}

          <div className="border-t border-black/[0.07] pt-7">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
              Travel details
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <label>
                <span className="mb-2 flex items-center gap-2 text-[10px] font-medium text-black/55">
                  <CalendarDays
                    size={13}
                    className="text-[#008000]"
                  />

                  Travel date
                </span>

                <input
                  type="date"
                  name="travelDate"
                  defaultValue={
                    initialTravelDate
                  }
                  className={fieldClass}
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-[10px] font-medium text-black/55">
                  <Users
                    size={13}
                    className="text-[#008000]"
                  />

                  Adults
                </span>

                <input
                  type="number"
                  name="adults"
                  min="1"
                  defaultValue={
                    initialTravelers
                  }
                  className={fieldClass}
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-[10px] font-medium text-black/55">
                  <Users
                    size={13}
                    className="text-[#008000]"
                  />

                  Children
                </span>

                <input
                  type="number"
                  name="children"
                  min="0"
                  defaultValue="0"
                  className={fieldClass}
                />
              </label>
            </div>
          </div>

          {/* MESSAGE */}

          <div className="border-t border-black/[0.07] pt-7">
            <label>
              <span className="mb-2 block text-[10px] font-medium text-black/55">
                Tell us more about your plans
              </span>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us where you'd like to go, what you'd like to experience, accommodation needs or any other requirements..."
                className={`${fieldClass} resize-none leading-6`}
              />
            </label>
          </div>

          {/* SUBMIT */}

          <div className="border-t border-black/[0.07] pt-7">
            <button
              type="submit"
              disabled={status === "loading"}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-full
                bg-[#008000]
                px-6
                py-4
                text-[11px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#169b16]
                hover:shadow-[0_12px_30px_rgba(0,128,0,0.18)]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {status === "loading"
                ? "Sending inquiry..."
                : "Send inquiry"}

              {status === "loading" ? (
                <LoaderCircle
                  size={14}
                  className="animate-spin"
                />
              ) : (
                <Send
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              )}
            </button>

            {status === "success" && (
              <div className="mt-4 flex items-start gap-3 rounded-[14px] border border-[#90EE90]/50 bg-[#eef7ea] px-4 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#008000] text-white">
                  <Check size={12} />
                </span>

                <div>
                  <p className="text-[12px] font-semibold text-[#1b5f1b]">
                    Inquiry sent successfully
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#426142]">
                    {statusMessage}
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 rounded-[14px] border border-red-200 bg-red-50 px-4 py-4">
                <p className="text-[11px] leading-5 text-red-700">
                  {statusMessage}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* SIDEBAR */}

      <aside>
        <div className="sticky top-[110px] space-y-5">
          <div className="rounded-[26px] bg-[#102719] p-6 text-white md:p-7">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
              What happens next?
            </p>

            <h3 className="mt-4 text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.04em]">
              We&apos;ll help shape
              <br />

              <span className="font-medium italic text-[#BDF5B5]">
                the next step.
              </span>
            </h3>

            <div className="mt-7 space-y-5">
              {[
                {
                  number: "01",
                  text: "Send your travel inquiry.",
                },
                {
                  number: "02",
                  text: "Avi Lanka reviews your requirements.",
                },
                {
                  number: "03",
                  text: "We contact you to confirm the details.",
                },
                {
                  number: "04",
                  text: "Your journey or activity is arranged.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[35px_1fr] gap-3 border-t border-white/10 pt-4"
                >
                  <span className="text-[8px] font-semibold tracking-[0.2em] text-[#BDF5B5]/60">
                    {step.number}
                  </span>

                  <p className="text-[11px] leading-5 text-white/55">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT CARD */}

          <div className="rounded-[22px] border border-black/[0.07] bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7ea] text-[#008000]">
                <MessageCircle size={16} />
              </span>

              <div>
                <h3 className="text-[14px] font-semibold text-[#182018]">
                  Prefer to chat?
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-black/45">
                  You can also contact Avi Lanka directly if you need help with
                  your inquiry.
                </p>

                <Link
                  href="/contact"
                  className="mt-4 inline-block text-[10px] font-semibold text-[#008000] transition-colors duration-300 hover:text-[#169b16]"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}