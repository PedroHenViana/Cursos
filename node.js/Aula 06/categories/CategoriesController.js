import express from "express";
const router =  express.Router();

router.get("/categories", (req, res) => {
    res.send("Rota de Categorias")
});

router.get("/admin/categories/new", (req, res) => {
    res.send("Rota para criar uma nova categoria!");
});

export default router;