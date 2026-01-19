import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface AssessmentResult {
  assessedValue: number;
  marketValue: number;
  potentialSavings: number;
  isOverAssessed: boolean;
  address: string;
}

const PropertyAssessmentTool = () => {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!address.trim()) {
      setError("Please enter an address");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('property-assessment', {
        body: { address: address.trim() }
      });

      if (fnError) {
        console.error('Function error:', fnError);
        setError('Unable to retrieve property data. Please try again.');
        return;
      }

      if (data.error) {
        setError(data.error);
        return;
      }

      setResult(data);
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background border border-border p-8 md:p-12 lg:p-16">
      {/* Header */}
      <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
        Property Assessment Check
      </h2>
      <p className="text-center text-foreground/60 font-body text-base md:text-lg mb-10">
        Enter your address to see if your home is over-assessed by the City of Philadelphia.
      </p>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your Philadelphia address..."
          className="flex-1 px-5 py-4 text-base font-body border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-10 py-4 bg-foreground text-background font-body text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Checking..." : "Check Value"}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <p className="text-center text-red-600 font-body mb-6">{error}</p>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="flex justify-center my-8">
          <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
        </div>
      )}

      {/* Results Section */}
      {result && !isLoading && (
        <div className="bg-muted/30 p-8 md:p-10 mt-8 border-t-2 border-foreground">
          {/* Address Display */}
          <p className="text-center text-foreground/70 font-body text-sm mb-6">
            {result.address}
          </p>

          {/* Value Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Assessed Value Card */}
            <div className="bg-background p-6 border border-border text-center">
              <p className="text-xs uppercase tracking-widest text-foreground/50 font-body mb-2">
                City Assessed Value
              </p>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                {formatCurrency(result.assessedValue)}
              </p>
              <p className="text-xs text-foreground/40 font-body mt-2">
                Source: OPA (Official)
              </p>
            </div>

            {/* Market Value Card */}
            <div className="bg-background p-6 border border-border text-center">
              <p className="text-xs uppercase tracking-widest text-foreground/50 font-body mb-2">
                Estimated Market Value
              </p>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                {formatCurrency(result.marketValue)}
              </p>
              <p className="text-xs text-foreground/40 font-body mt-2">
                Source: Market Data
              </p>
            </div>
          </div>

          {/* Verdict Box */}
          <div
            className={cn(
              "p-6 text-center border",
              result.isOverAssessed
                ? "border-red-200 bg-red-50/50"
                : "border-green-200 bg-green-50/50"
            )}
          >
            {result.isOverAssessed ? (
              <>
                <p className="text-red-700 font-body text-sm uppercase tracking-wide mb-2">
                  Your Property May Be Over-Assessed
                </p>
                <p className="font-display text-4xl md:text-5xl text-red-700 mb-2">
                  {formatCurrency(result.potentialSavings)}
                </p>
                <p className="text-red-600/80 font-body text-sm">
                  Potential annual tax savings
                </p>
              </>
            ) : (
              <>
                <p className="text-green-700 font-body text-sm uppercase tracking-wide mb-2">
                  Your Assessment Looks Accurate
                </p>
                <p className="text-green-600/80 font-body">
                  Your property appears to be fairly assessed based on current market data.
                </p>
              </>
            )}
          </div>

          {/* CTA Button */}
          {result.isOverAssessed && (
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-foreground text-background font-body text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors"
              >
                Start My Appeal Request
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyAssessmentTool;
