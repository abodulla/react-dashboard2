import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesHomeChart from "../components/Home/SalesHomeChart";
import SalesChannelChart from "../components/Home/SalesChannelChart";
import CategoryDistiributionChart from "../components/Home/CategoryDistiributionChart";
import { motion } from "framer-motion";
import { Zap, Users, ShoppingBag, BarChart2 } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <Header title="Home" />

        <main className="max-w-7xl mx-auto relative z-10">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatCard
              name="Total Sales"
              icon={Zap}
              value="$75,658"
              color="#6366F1"
            />
            <StatCard
              name="New Users"
              icon={Users}
              value="3,900"
              color="#8B5CF6"
            />
            <StatCard
              name="Total Products"
              icon={ShoppingBag}
              value="567"
              color="#EC4899"
            />
            <StatCard
              name="Conversion Rate"
              icon={BarChart2}
              value="12.5%"
              color="#10B981"
            />
          </motion.div>

          {/* CHARTS */}
          <div className="grid grid-cols-2 gap-8">
            <SalesHomeChart />
            <CategoryDistiributionChart />
            <SalesChannelChart />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
