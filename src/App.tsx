// src/App.tsx

import React, { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useApiData } from "./hooks/useApiData";
import DateForm from "./components/DateForm";

const App: React.FC = () => {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  ); // Default to today's date
  const [showModal, setShowModal] = useState<boolean>(false);

  const { apiData, loading, error } = useApiData(date);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  return (
    <>
      <div className="appContainer">
        <DateForm selectedDate={date} onDateChange={handleDateChange} />
        {loading ? (
          <div className="loadingState">
            <i className="fa-solid fa-gear"></i>
          </div>
        ) : apiData ? (
          <>
            <Main data={apiData} />
            {showModal && (
              <SideBar data={apiData} handleToggleModal={handleToggleModal} />
            )}
            <Footer data={apiData} handleToggleModal={handleToggleModal} />
          </>
        ) : (
          error && <div>Error: {error}</div>
        )}
      </div>
    </>
  );
};

export default App;
