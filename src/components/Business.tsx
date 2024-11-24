import { Lightbulb, Target, DollarSign, BarChart } from 'lucide-react'

export default function Business() {
  const features = [
    {
      title: "Business Agility & Innovation",
      icon: <Lightbulb className="w-6 h-6 text-blue-400" />,
      bgColor: "bg-blue-50",
      width: "md:w-56",
      height: "h-60",
    },
    {
      title: "Strategic Goal Definition",
      icon: <Target className="w-6 h-6 text-rose-400" />,
      bgColor: "bg-rose-50",
      width: "md:w-56",
      height: "h-60",
    },
    {
      title: "Action Roadmap Definition",
      icon: <DollarSign className="w-6 h-6 text-amber-400" />,
      bgColor: "bg-amber-50",
      width: "md:w-56",
      height: "h-60",
    },
    {
      title: "Business Model Analysis",
      icon: <BarChart className="w-6 h-6 text-blue-400" />,
      bgColor: "bg-blue-50",
      width: "md:w-56",
      height: "h-60",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center p-8 bg-gradient-to-br  from-rose-50 to-amber-50 min-h-screen">
      <div className="max-w-xl flex flex-col items-start gap-10 mb-12 lg:mb-0 lg:mr-12">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          We are building <br/> business for your <br/> digital economy
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Lorem ipsum dolor sit amet, hendrerit omittant mel, es <br/> vidit animal iracundia. Lus te altera essent incorrup. Id <br/> alien accu consetetur em es vidit animal iracundia. Lus <br/> te altera essent incorrup.
        </p>
        <button className="py-3 px-8 rounded-full bg-rose-500 text-white font-semibold text-lg hover:bg-blue-800 transition-colors duration-200">
          See how it works
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-0">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col justify-center ${feature.width} ${feature.height} ${feature.bgColor} rounded-3xl shadow-lg ${index % 2 === 1 ? 'mt-8' : ''}`}
          >
            <div className="flex items-center px-6">
              <div className="mr-4 p-2 rounded-lg bg-white">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}