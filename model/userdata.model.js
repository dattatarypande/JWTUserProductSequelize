module.exports = (Sequelize, sequelize) => { 
    const model = sequelize.define(
        "userdata",
        {
            User_Id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            User_Name: {
                type: Sequelize.STRING(100),
                allowNull: false,

            },
            User_Password: {
                type: Sequelize.STRING(100),
                allowNull: false,

            },
            Email: {
                type: Sequelize.STRING(100),
                unique: true,
                allowNull: false,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue:true,
            },
            Role: {
                type: Sequelize.STRING(10),
                defaultValue: "user",
                allowNull: false,
            }


        },
        {
            freezeTableName: true,
            // TIMESTAMP:false,


        }
    );


    return model;
};