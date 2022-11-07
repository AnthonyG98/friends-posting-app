module.exports = (sequelize, DataTypes) =>{
    const Dashboard = sequelize.define("Dashboard", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile_picture:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Dashboard
}
