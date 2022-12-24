# react-import-csv

imp pkg

```javascript
import React, { useState } from "react";
import Papa from "papaparse";
```

create state for ster and geter

```javascript
const [csvData, setCsvData] = useState([]);
```

crete handle change

```javascript
const handleFileChange = (e) => {
  // jika ok
  Papa.parse(e.target.files[0], {
    header: true,
    complete: (results) => {
      setCsvData(results.data);
    },
  });
};
```

and render

`````javascript
(
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
)````;
`````
