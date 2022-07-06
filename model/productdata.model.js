

module.exports = (Sequelize, sequelize) => {
    const model = sequelize.define(
        "productdata",
        {
            Pid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            product_Name: {
                type: Sequelize.STRING(100),
                allowNull: true,

            },
            product_Desc: {
                type: Sequelize.STRING(200),
                allowNull: true,

            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue:false,
            },
            created_by:{
                type: Sequelize.INTEGER,
                allowNull: true, 
            },
            updated_by:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            deleted_by:{
                type: Sequelize.INTEGER,
                allowNull: true, 
            },
        },
        
        {
            freezeTableName: true,
            
        }
    );

    return model;
};