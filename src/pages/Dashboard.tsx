import { SlScreenSmartphone } from "react-icons/sl";
import { CiMail, CiCalendar } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import { IoHandLeftOutline } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import CustomTable from "@/customComponents/CustomTable";

const Dashboard = () => {
  const details = [
    {
      icon: <SlScreenSmartphone />,
      text: '+91 8511893083'
    },
    {
      icon: <CiMail />,
      text: "demo@mail.com"
    }
  ]

  const summaryInNumber = [208, 215, 2, 28]
  const summaryInText = ['Total hour per month', 'Total work per month (8 hour)', 'Absent', 'Present']

  const totalHoursPerMonth = summaryInNumber[0]
  const totalWorkedHours = summaryInNumber[1]

  const diff = totalWorkedHours - totalHoursPerMonth

  const table = [
    {
      tableHeader: 'date',
      data: []
    },
    {
      tableHeader: 'status',
      data: [
        'holiday',  // 1 (Sunday)
        'present',  // 2
        'present',  // 3
        'present',  // 4
        'present',  // 5
        'present',  // 6
        'present',  // 7
        'holiday',  // 8 (Sunday)
        'present',  // 9
        'present',  // 10
        'absent',   // 11
        'present',  // 12
        'present',  // 13
        'present',  // 14
        'holiday',  // 15 (Sunday)
        'present',  // 16
        'present',  // 17
        'present',  // 18
        'absent',   // 19
        'present',  // 20
        'present',  // 21
        'holiday',  // 22 (Sunday)
        'present',  // 23
        'present',  // 24
        'present',  // 25
        'present',  // 26
        'present',  // 27
        'present',  // 28
        'holiday',  // 29 (Sunday)
        'present'   // 30
      ]
    },
    {
      tableHeader: 'scheduled',
      data: ['9am - 6pm']
    },
    {
      tableHeader: 'check in',
      data: []
    },
    {
      tableHeader: 'check out',
      data: []
    },
    {
      tableHeader: 'worked',
      data: []
    },
    {
      tableHeader: 'difference',
      data: []
    },
  ]

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // current month (0-based)

  // total days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const dateObj = new Date(year, month, i);

    table[0].data.push({
      date: i,
      day: dateObj.toLocaleString('en-US', { weekday: 'long' })
    });
  }

  return (
    <main className="container py-4">
      <div className="flex items-center gap-6">
        <div>
          <span className="text-5xl bg-white text-black px-10 rounded-full py-6">D</span>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <h2 className="capitalize text-3xl mb-3">Daksh sathwara</h2>
            <div>
              <span className="bg-[#d3f8d5] text-black px-3 py-1 rounded-full">Full time</span>
            </div>
          </div>
          <h3>Full stack developer</h3>
          {
            details?.map((detail) => {
              return (
                <div className="flex items-center gap-2">
                  {detail?.icon}
                  <span>{detail?.text}</span>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="mt-10">
        <Badge className="p-3 bg-[#d3f8d5]">
          <IoHandLeftOutline className="!h-[20px] !w-[20px]" />
          <span>Attendance & leaves</span>
        </Badge>
      </div>
      <hr className="border-white my-10" />

      {/* Attendance header */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <CiCalendar className="bg-white text-5xl text-black p-2 rounded-full" />
          <h2 className="text-2xl">January 2025</h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardBackspace className=" bg-white text-black p-2 rounded-lg text-4xl" />
            <CiCalendar className=" bg-white text-black p-2 rounded-lg text-4xl" />
            <MdOutlineKeyboardBackspace className="rotate-180 bg-white text-black p-2 rounded-lg text-4xl" />
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-30">
                <SelectValue placeholder="Select filter date" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button>
              <FaPlus />
              <span>New request</span>
            </Button>
          </div>
        </div>
      </section>

      {/* summary section */}
      <section>
        <h2 className="mt-8 mb-3 text-3xl">Summary</h2>
        <div className="grid grid-cols-3 gap-4">
          {
            summaryInNumber?.map((summary, index) => {
              return (
                <div className="bg-white text-black p-3 rounded-lg">
                  <h2 className="font-bold text-xl">{summary}</h2>
                  <h4>{summaryInText[index]}</h4>
                </div>
              )
            })
          }
          <div className="bg-white text-black p-3 rounded-lg">
            <h2 className="font-bold text-xl">{diff > 0 ? `+ ${diff} hour` : `${Math.abs(diff)} hour`}</h2>
            <h4>Difference</h4>
          </div>
        </div>
      </section>


      {/* table section */}
      <section>
        <CustomTable tableData={table} />
      </section>

    </main>
  )
}

export default Dashboard