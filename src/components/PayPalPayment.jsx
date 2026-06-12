import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { DollarSign, ShieldCheck } from "lucide-react";

export default function PayPalPayment() {
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [status, setStatus] = useState(null); // 'success', 'error', null

  // We check for the Client ID in environment variables. 
  // "test" is the standard fallback for PayPal testing if no ID is provided.
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID || "test";
  
  const initialOptions = {
    "client-id": clientId,
    currency: "USD",
    intent: "capture",
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      setStatus(`Transaction completed successfully by ${details.payer.name.given_name}!`);
    });
  };

  return (
    <div className="bg-slate-950/50 border border-slate-800 p-6 md:p-8 rounded-lg hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500/10 p-2.5 rounded-lg border border-blue-500/20">
          <DollarSign className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white font-mono">Secure Payment</h3>
          <p className="text-xs text-slate-400 font-mono mt-1">Pay invoices or send support</p>
        </div>
      </div>
      
      <div className="space-y-5 flex-1 flex flex-col">
        <div>
          <label className="block text-xs font-mono text-slate-500 mb-2">
            AMOUNT (USD)
          </label>
          <input
            type="number"
            min="1"
            step="0.01"
            placeholder="0.00"
            className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700 font-mono text-sm focus:border-blue-500 focus:outline-none transition-colors text-slate-200"
            value={amount}
            onChange={(e) => {
              setStatus(null); // Clear status when amount changes
              setAmount(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-500 mb-2">
            REFERENCE / INVOICE NO.
          </label>
          <input
            type="text"
            placeholder="e.g. INV-2026-001"
            className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700 font-mono text-sm focus:border-blue-500 focus:outline-none transition-colors text-slate-200"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        </div>

        <div className="pt-4 mt-auto">
          {!amount || parseFloat(amount) <= 0 ? (
            <div className="text-center p-4 rounded border border-dashed border-slate-700 text-slate-500 text-sm font-mono bg-slate-900/50">
              Enter an amount above $0 to enable payment
            </div>
          ) : (
            <div className="min-h-[150px]">
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          description: reference || "Freelance Services / Support",
                          amount: {
                            value: parseFloat(amount).toFixed(2),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={handleApprove}
                  onError={(err) => {
                    console.error("PayPal Checkout onError", err);
                    setStatus("Payment window closed or an error occurred.");
                  }}
                />
              </PayPalScriptProvider>
            </div>
          )}
        </div>

        {status && (
          <div
            className={`mt-4 p-3 rounded-md text-center text-sm font-mono ${
              status.includes("completed")
                ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                : "text-red-400 bg-red-500/10 border border-red-500/20"
            }`}
          >
            <p>{status}</p>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 pt-2 text-slate-500 text-xs font-mono border-t border-slate-800">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span>Secured by PayPal Sandbox API</span>
        </div>
      </div>
    </div>
  );
}
