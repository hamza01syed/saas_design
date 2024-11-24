export default function PricingCard() {
    const plans = [
      {
        name: "For business",
        price: 250,
        description: "Advanced softwart that belongs to all business",
        features: [
          { text: "Easy To Track AI Data", strikethrough: false },
          { text: "100+ Ready Boots", strikethrough: false },
          { text: "Best Data Plan & Package", strikethrough: false },
          { text: "24/7 Online Support", strikethrough: false },
        ],
        color: "bg-gradient-to-br from-amber-400 to-amber-500",
        width: "md:w-[480px]",
        height: "h-[600px]",
      },
      {
        name: "Personal",
        price: 50,
        features: [
          { text: "Easy To Track AI Data", strikethrough: false },
          { text: "100+ Ready Boots", strikethrough: false },
          { text: "Best Data Plan & Package", strikethrough: true },
          { text: "24/7 Online Support", strikethrough: true },
        ],
        color: "bg-gradient-to-br from-rose-400 to-rose-500",
        width: "w-[320px]",
        height: "h-[500px]",
      },
      {
        name: "Advanced",
        price: 75,
        features: [
          { text: "Easy To Track AI Data", strikethrough: false },
          { text: "100+ Ready Boots", strikethrough: false },
          { text: "Best Data Plan & Package", strikethrough: false },
          { text: "24/7 Online Support", strikethrough: true },
        ],
        color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
        width: "w-[320px]",
        height: "h-[500px]",
      },
    ]
  
    return (
      <div className="flex flex-col mt-32 md:mt-0 items-center justify-center  min-h-screen p-8 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${plan.color} ${plan.width} ${plan.height} rounded-[32px] p-8 text-white shadow-xl flex flex-col`}
            >
              <h2 className="text-3xl font-semibold mb-6">{plan.name}</h2>
              <div className="mb-4">
                <div className="text-5xl font-bold mb-1">${plan.price}</div>
                <div className="text-sm opacity-90">per month</div>
              </div>
              {plan.description && (
                <p className="text-lg opacity-90 mb-8">
                  {plan.description}
                </p>
              )}
              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className={`text-base opacity-90 ${feature.strikethrough ? 'line-through' : ''}`}
                  >
                    {typeof feature === 'string' ? feature : feature.text}
                  </li>
                ))}
              </ul>
              <button className="mt-8 py-3 px-8 rounded-full bg-white text-gray-800 font-semibold hover:bg-opacity-90 transition-colors duration-200 w-fit">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }