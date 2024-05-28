import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

;
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };


const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


//   pie chart


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxios()
    const { data } = useQuery({
        queryKey: ['adminState'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin_state/${user.email}`)
            return res.data;
        }
    })

    const { data:chartData} = useQuery({
        queryKey: ['chartData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adminStatData`)
            return res.data;
        }
    })

    console.log(chartData);
    const pieChartData= chartData?.map((data)=>{
        return {value:data.totalRevenue, name:data.category}
    })

    return (
        <div>
            <h1 className="text-3xl font-bold">Hi,Welcome Back</h1>
            <div>
                <div className="flex justify-around gap-4 my-6">

                    <div className="stats shadow w-full text-center">
                        <div className="stat">
                            <div className="stat-value">AED {data?.revenue}</div>
                            <div className="stat-title">Revenue</div>
                        </div>
                    </div>
                    <div className="stats shadow w-full text-center">
                        <div className="stat">
                            <div className="stat-value">{data?.menus}</div>
                            <div className="stat-title">Menus</div>
                        </div>
                    </div>
                    <div className="stats shadow w-full text-center">
                        <div className="stat">
                            <div className="stat-value">{data?.users}</div>
                            <div className="stat-title">Users</div>
                        </div>
                    </div>
                    <div className="stats shadow w-full text-center">
                        <div className="stat">
                            <div className="stat-value">{data?.payments}</div>
                            <div className="stat-title">Payments</div>
                        </div>
                    </div>


                </div>

            </div>
            <div className=" flex">
                <div className="w-1/2">
                <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='category' />
                <YAxis />
                <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                  {chartData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                  ))}
                </Bar>
              </BarChart>

                </div>
                <div className="w-1/2">
                <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
                </div>
               
            </div>

        </div>
    );
};

export default AdminHome;