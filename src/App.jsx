import React, { useState } from "react";
import Papa from "papaparse";

function App() {
  const [csvData, setCsvData] = useState([]);
  // Allowed extensions for input file
  const allowedExtensions = ["csv"];
  // err mesage
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setError("");
    if (e.target.files.length) {
      // ambil index file 0
      const inputFile = e.target.files[0];
      // cek extension file
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // jika ok
      Papa.parse(e.target.files[0], {
        header: true,
        complete: (results) => {
          setCsvData(results.data);
        },
      });
    }
  };

  console.log(csvData);
  console.log("errrr", error);
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Telepon</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((row) => (
            <tr key={row.nama}>
              <td>{row.nama}</td>
              <td>{row.alamat}</td>
              <td>{row.telepon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
