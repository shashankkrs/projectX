const mongoose = require("mongoose");

const defectSchema = new mongoose.Schema({
  problem: Boolean,
  label: String,
  description: String,
});

const vehicleSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vehicles",
  },
  engine: {
    compression: defectSchema,
    cooling_system: defectSchema,
    fuel_system: defectSchema,
    ignition_system: defectSchema,
    lubrication_system: defectSchema,
    controls: defectSchema,
    clutch_system: defectSchema,
    exhaust_system_induction_system: defectSchema,
  },
  transmission: {
    main_gear_box_controls: defectSchema,
    auxillary_gear_box_controls: defectSchema,
    shaft_u_joint: defectSchema,
    rear_axle: defectSchema,
    front_axle: defectSchema,
    tracta_type_joint_bevel_boxes: defectSchema,
    spindles_bearings: defectSchema,
    wheels_tyres: defectSchema,
    tracks: defectSchema,
    brake_service_parking: defectSchema,
    reduction_gear: defectSchema,
    spring_suspension: defectSchema,
    bogies_idler: defectSchema,
    steering_gears_controls: defectSchema,
    speedometer_recounter_drive: defectSchema,
  },
  electrical: {
    accumulator: defectSchema,
    dynamo: defectSchema,
    voltage_controller: defectSchema,
    starter_switch_solenoid: defectSchema,
    wiring: defectSchema,
    switch_board_lamps_horn_siren: defectSchema,
    aux_generator_controls: defectSchema,
    power_travers_motor: defectSchema,
  },
  lubrication: {
    engine: defectSchema,
    gear_box: defectSchema,
    axles: defectSchema,
    general: defectSchema,
  },
  chassis: {
    chassis: defectSchema,
    twin_shackles_hooks: defectSchema,
    frame_rear_forks: defectSchema,
    body_forks: defectSchema,
    canopy_superstructure: defectSchema,
    hull: defectSchema,
    tool_boxes: defectSchema,
    petrol_oil_water_cans: defectSchema,
    extinguishers: defectSchema,
  },
  tools_accessories: String,
  marks_and_actions: String,
  road_test: String,
  special_fittings: String,
  vehicle_records_updated: String,
  inspection_remarks: String,
});

const Vehicle = mongoose.model("vehicle_inspection", vehicleSchema);

module.exports = Vehicle;
