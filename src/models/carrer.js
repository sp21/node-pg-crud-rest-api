module.exports = (sequelize, DataTypes) => {
    const Carrer = sequelize.define('carrer', {
        serial_number: {
            type: DataTypes.TEXT,
            primaryKey: true
        },
        employee_number: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        role_designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        job_level: {
            type: DataTypes.STRING,
            allowNull: false
        },
        current_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        subunit_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        eligible_for_batch3DL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        enabled_batch: {
            type: DataTypes.STRING,
            allowNull: true
        },
        total_experience: {
            type: DataTypes.STRING,
            allowNull: true
        },
        experience_in_infosys: {
            type: DataTypes.STRING,
            allowNull: true
        },
        brief_profile: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        area_of_expertise: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        coaching_hours_deducted_per_week: {
            type: DataTypes.STRING,
            allowNull: true
        },
        areas_that_can_be_contributed_as_coach: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        area_of_enablement_required_to_be_carrer_coach: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        expertise_skillsets: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },{timestamps:false});
    return Carrer;
};