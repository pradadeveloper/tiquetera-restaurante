module.exports = 

function usuariosTiquetera(sequelize,DataTypes){

    let alias = "usuarios";
    
    let cols = {
        id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        nombres:{type:DataTypes.STRING},
        apellidos:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        mobile:{type:DataTypes.NUMBER},
    }

    let config = {
        tableName:"usuarios",
        timestamps: false,
        camelCase: false
    }

    const usuarios = sequelize.define(alias,cols,config);
    
    return  usuarios;
}