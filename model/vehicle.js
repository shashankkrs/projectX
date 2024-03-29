const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ExpenseSchema = new Schema({
  expense_type: String,
  expense_amount: Number,
  expense_date: {
    type: Date,
    default: Date.now,
  },
  expense_description: String,
});

const KmplLogSchema = new Schema({
  kmpl: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const odometerLogSchema = new mongoose.Schema({
  km_run: Number,
  km_diff: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const fuelLogSchema = new mongoose.Schema({
  current_fuel: Number,
  fuel_diff: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

// * * Vehicle elements
const vehicleSchema = new mongoose.Schema({
  vehicle_no: String,
  vehicle_crp_no: Number,
  name: String,
  registration_no: String,
  year_of_manufacture: Number,
  vehicle_type: String,
  no_of_wheels: Number,
  cost: Number,
  destination: String,
  date_of_supply: Date,
  front_view: String,
  back_view: String,
  right_view: String,
  left_view: String,
  top_view: String,
  chasis_no: String,
  engine_no: String,
  no_of_cylinders: Number,
  horse_power: Number,
  size_of_sparkling_plug: Number,
  tappet: String,
  circuit_breaker: String,
  firing_order: String,
  wheel_base: String,
  body_type: String,
  front: String,
  tyre_size: String,
  front_tyre_pressure: String,
  rear_tyre_pressure: String,
  battery_type: String,
  battery_volt: String,
  battery_no: String,
  date_of_service: Date,

  engine_first_overhaul: Number,
  distance_before_first_overhaul: Number,
  date_of_first_overhaul: Date,
  engine_second_overhaul: Number,
  distance_before_second_overhaul: Number,
  date_of_second_overhaul: Date,
  deleted: {
    type: Boolean,
    default: false,
  },
  health_score: {
    type: Number,
    default: 0,
  },
  available: {
    type: Boolean,
    default: true,
  },

  // * * Vehicle Daily Running
  total_kilo_meter: {
    type: Number,
    default: 0,
  },

  odometer_log: [odometerLogSchema],

  // * * Vehicle Fuel Log
  fuel: {
    type: Number,
    default: 0,
  },
  fuel_capacity: {
    type: Number,
    default: 0,
  },

  fuel_type: {
    type: Schema.Types.ObjectId,
    ref: "oil",
    default: "64732527cd0bb4693e7749fe",
  },

  fuel_log: [fuelLogSchema],

  category: { type: String, default: "LMV" },
  jobCards: [
    {
      type: Schema.Types.ObjectId,
      ref: "job_cards",
    },
  ],
  defectMemos: [
    {
      type: Schema.Types.ObjectId,
      ref: "defect_memo",
    },
  ],

  current_kmpl: {
    type: Number,
    default: 0,
  },

  kmpl_log: [KmplLogSchema],
  expense_log: [ExpenseSchema],
});

const vehicleModel = mongoose.model("vehicles", vehicleSchema);

module.exports = vehicleModel;
