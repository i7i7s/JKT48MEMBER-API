const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Get all members with optional query filters
app.get('/api/members', (req, res) => {
    let result = data.data;

    // Optional query params for filtering
    const { type, name } = req.query;
    
    if (type) {
        result = result.filter(member => member.type.toLowerCase() === type.toLowerCase());
    }

    if (name) {
        result = result.filter(member => 
            member.name.toLowerCase().includes(name.toLowerCase()) || 
            member.nickname.toLowerCase().includes(name.toLowerCase())
        );
    }

    res.json({
        status: true,
        message: "Berhasil mendapatkan data member",
        total: result.length,
        data: result
    });
});

// Get member by code
app.get('/api/members/:code', (req, res) => {
    const code = req.params.code.toUpperCase();
    const member = data.data.find(m => m.code === code);

    if (member) {
        res.json({
            status: true,
            message: "Berhasil mendapatkan data member",
            data: member
        });
    } else {
        res.status(404).json({
            status: false,
            message: "Member tidak ditemukan",
            data: null
        });
    }
});

// Get all available teams
app.get('/api/teams', (req, res) => {
    const teams = [...new Set(data.data.map(m => m.type))];
    res.json({
        status: true,
        message: "Berhasil mendapatkan data tim",
        data: teams
    });
});

// Get members by team
app.get('/api/teams/:team', (req, res) => {
    const team = req.params.team.toUpperCase();
    const members = data.data.filter(m => m.type === team);

    if (members.length > 0) {
        res.json({
            status: true,
            message: `Berhasil mendapatkan data member tim ${team}`,
            total: members.length,
            data: members
        });
    } else {
        res.status(404).json({
            status: false,
            message: "Tim tidak ditemukan atau tidak memiliki member",
            data: []
        });
    }
});

// Base Route
app.get('/', (req, res) => {
    res.json({
        name: "JKT48 Member API",
        description: "API sederhana untuk data member JKT48",
        endpoints: {
            "GET /api/members": "Mendapatkan semua member (bisa difilter dengan query ?type=PASSION atau ?name=olla)",
            "GET /api/members/:code": "Mendapatkan detail member berdasarkan kode (contoh: FREYA_JAYAWARDANA)",
            "GET /api/teams": "Mendapatkan daftar tim/status yang tersedia (PASSION, LOVE, DREAM, TRAINEE, dll)",
            "GET /api/teams/:team": "Mendapatkan member berdasarkan tim (contoh: /api/teams/PASSION)"
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
