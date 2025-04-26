
import React from "react";
import { Truck, Box, Ship, PackageCheck } from "lucide-react";

const steps = [
  {
    name: "Order Placed",
    icon: <Box className="w-6 h-6 text-purple-600" />,
    done: true,
    color: "bg-purple-600 text-white",
    description: "We've received your order.",
  },
  {
    name: "Shipped",
    icon: <Ship className="w-6 h-6 text-purple-600" />,
    done: true,
    color: "bg-purple-500 text-white",
    description: "Your order is on the way to our carrier.",
  },
  {
    name: "Out for Delivery",
    icon: <Truck className="w-6 h-6 text-purple-600" />,
    done: false,
    color: "bg-purple-300 text-purple-800",
    description: "Your package is with the delivery agent.",
  },
  {
    name: "Delivered",
    icon: <PackageCheck className="w-6 h-6 text-green-600" />,
    done: false,
    color: "bg-gray-200 text-gray-600",
    description: "Your package will arrive soon.",
  },
];

const DeliveryStatusPage = () => {
  // Figure out progress: how many steps are 'done'
  const progress =
    ((steps.filter((s) => s.done).length - 1) / (steps.length - 1)) * 100;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-7">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-purple-700">
          <Truck className="w-8 h-8" />
          Delivery Status
        </h1>
        <div className="mb-8">
          <div className="relative flex items-center justify-between mb-6">
            {/* Progress bar */}
            <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 z-0">
              <div className="bg-gray-200 h-2 rounded-full w-full"></div>
              <div
                className="bg-purple-500 h-2 rounded-full absolute top-0 left-0"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Steps */}
            {steps.map((step, idx) => (
              <div
                key={step.name}
                className={`relative z-10 flex flex-col items-center flex-1 last:flex-none`}
              >
                <div
                  className={`mb-2 rounded-full flex items-center justify-center w-10 h-10 ${step.done ? step.color : "bg-gray-100 text-gray-400 border border-gray-300"}`}
                >
                  {step.icon}
                </div>
                <span
                  className={`text-xs font-semibold ${
                    step.done
                      ? "text-purple-700"
                      : "text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-2">
            {steps.map((s, idx) => (
              <span
                key={s.name}
                className="text-xs text-gray-600 text-center flex-1"
              >
                {s.done && (
                  <span className="font-bold text-purple-700">{s.description}</span>
                )}
                {!s.done && idx === steps.findIndex((step) => !step.done) && (
                  <span className="font-bold text-purple-600 animate-pulse">{s.description}</span>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded bg-soft-gray px-5 py-3 mt-3 text-gray-700 text-sm">
          Tip: You’ll receive updates when your order moves to the next step!
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatusPage;
