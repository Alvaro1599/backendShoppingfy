const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const product = require('./products');
const category = sequelize.define(
	'category',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: false
	}
);

module.exports = category;
