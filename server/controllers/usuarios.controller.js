import model from "../database/models";

const buscarUsuario = async (req, res) => {
  try {
    const usuario = await model.Usuario.findOne({
      where: { usuario: req.body.usuario, contra: req.body.contra },
    });
    if(usuario){
      res.status(200).send({message:'ok',usuario});
    }else{
      res.status(200).send({
        message: "fail",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
export { buscarUsuario };
