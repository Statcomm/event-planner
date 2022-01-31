const { eventNames } = require("../../db/models/Event")
const Event = require("../../db/models/Event")

exports.getEvent = async (req,res)=>{
    try {
       const events = await Event.find()
        res.json(events)
    } catch (error){
        res.status(500).json({message:error.message})
    }
 }

 exports.createEvent = async (req,res) => {
    try { 
    const newEvent = await Event.create(req.body)
          res.status(201).json(newEvent)
    }  catch (error) {
        res.status(500).json({message:error.message})
    }
  }

  exports.updateEvent = async (req, res) => {
    try{
        const {eventId} = req.params
        const event = await Event.findByIdAndUpdate({_id: eventId}, req.body, {
            new: true,
            runValidators:true
        })
        if (event) res.status(200).json(event)
        else res.status(404).json({message:"not found"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteEvent = async (req,res) => {
    try {
        const {eventId} = req.params
        const foundEvent = await Event.findByIdAndDelete ({_id: eventId})
        if (foundEvent){
            res.status(204).end()
        } else {
    res.status(404).json({message:"not found"})
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.searchEvent = async (req,res)=>{
    try {
        const {eventName} = req.params
        const foundEvent = await Event.findOne({name: eventName})
        if (foundEvent){
            res.status(204).end()
        } else {
    res.status(404).json({message:"not found"})
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }