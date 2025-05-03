import { Line } from "react-chartjs-2"
import { joinedContests } from "../../assets/Constant"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const CompetitiveProgramming = () => {
  const stats = {
    rating: 1662,
    problemsSolved: 592,
    contests: 39,
  }

  const difficulty = {
    easy: { solved: 251, total: 873 },
    medium: { solved: 304, total: 1835 },
    hard: { solved: 37, total: 827 },
  }

  const contestLabels = joinedContests.map((_, index) => `${index + 1}`)
  const ratingTrend = joinedContests.map((contest) => ({
    solved: contest.problemsSolved,
    total: contest.totalProblems,
    rating: contest.rating,
    ranking: contest.ranking,
  }))

  const data = {
    labels: contestLabels,
    datasets: [
      {
        label: "Rating",
        data: ratingTrend.map((contest) => contest.rating),
        fill: false,
        borderColor: "#BE5B50",
        backgroundColor: "#FBDB93",
        tension: 0.2,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: {
          color: "#aaa",
        },
        grid: { color: "#333" },
      },
      y: {
        ticks: {
          color: "#aaa",
        },
        grid: { color: "#333" },
      },
    },
  }

  const percentage = (solved, total) => (total ? Math.round((solved / total) * 100) : 0)

  return (
    <div className="w-full max-w-4xl px-6 py-8 border border-zinc-800 rounded-lg bg-zinc-900/30 backdrop-blur-sm">
      <div className="mb-8 text-center">
        <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
        <h2 className="text-3xl md:text-4xl cinzel-bold text-white">LeetCode Stats</h2>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row w-full justify-between items-start gap-6">
        <div className="w-full md:w-1/3 space-y-4">
          {Object.entries(stats).map(([label, value]) => (
            <div
              key={label}
              className="bg-black/50 rounded-md p-4 border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
            >
              <p className="text-sm text-zinc-400 capitalize">{label.replace(/([A-Z])/g, " $1")}</p>
              <p className="text-xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3 h-full">
          <div className="bg-black/50 p-4 rounded-md border border-zinc-700/50">
            <h3 className="text-base font-semibold text-white mb-4 cinzel-regular">Rating Trend</h3>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="mt-8 bg-black/50 p-4 rounded-md border border-zinc-700/50">
        <h3 className="text-base font-semibold text-white mb-4 cinzel-regular">Difficulty Breakdown</h3>
        <div className="space-y-4">
          {Object.entries(difficulty).map(([level, { solved, total }]) => {
            const colors = {
              easy: "#43A047",
              medium: "#FB8C00",
              hard: "#E91E63",
            }
            const percent = percentage(solved, total)

            return (
              <div key={level}>
                <div className="flex w-full justify-between text-sm mb-1">
                  <span style={{ color: colors[level] }}>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                  <span className="text-zinc-400">
                    {solved} / {total}
                  </span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded">
                  <div
                    className="h-2 rounded transition-all duration-500"
                    style={{ width: `${percent}%`, backgroundColor: colors[level] }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Programming() {
  return (
    <div className="w-full bg-black flex items-center justify-center py-12">
      <CompetitiveProgramming />
    </div>
  )
}
