const express = require("express");
const router = express.Router();

const controller = require("../controllers/literaturaLGBTController");

router.get("/", controller.getAll);
router.get("/buscarPorTitulo/:titulo/", controller.getTitulo);
router.get("/buscarPorAutoria/:autoria", controller.getAutoria);
router.get("/buscarPorEstilo/:estiloNarrativo", controller.getEstiloNarrativo);
router.get("/buscarPorGenero/:generoLiterario", controller.getGeneroLiteratura);
router.post("/criar", controller.criarLivro);
router.patch("/atualizar/:id", controller.atualizarLivro);
router.delete("/remover/:id", controller.deletarLivro);

module.exports = router;