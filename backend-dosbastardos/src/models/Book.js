const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Book",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            data: {
                type: DataTypes.BLOB('long'),
                allowNull: false,
              },
		},
		{
			timestamps: false,
		}
	);
};

