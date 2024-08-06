const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  
});

app.get('/api/employees1', async (req, res) => {
  const {search}=req.query;
  try {
    const result = await pool.query('SELECT * FROM nse_securities_available WHERE name_of_company ILIKE $1',[`%${search}`]);
   // console.log('Result:' ,result.rows)
    res.json(result.rows);
    
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get('/api/employees2', async (req, res) => {
  const {search}=req.query;
  try {
    const result = await pool.query('SELECT * FROM bse_securities_available  WHERE industry ILIKE $1',[`%${search}`]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

