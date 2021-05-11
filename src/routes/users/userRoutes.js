const router = require('express').Router();
const {createUser} = require("../../controllers/user_controllers");
var osu = require('node-os-utils')
var cpu = osu.cpu
var mem = osu.mem
var netstat = osu.netstat
var count = cpu.count() // 8
const si = require('systeminformation');






// promises style - new since version 3
// si.cpu()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
  // si.mem()
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
  
  // si.osInfo()
  // .then(data => console.log(data))
  // .catch(error => console.error(error));

  // si.uuid()
  // .then(data => console.log(data))
  // .catch(error => console.error(error));

  // si.currentLoad()
  // .then(data => console.log(data))
  // .catch(error => console.error(error));

  si.networkInterfaces()
  .then(data => console.log(data))
  .catch(error => console.error(error));


const TotalCpuUsage = ()=>{
  setInterval(() => {
    cpu.usage()
    .then(cpuPercentage => {
  
        console.log("Cpu Usage: ",cpuPercentage) // 10.38
  
    })
  }, 3000)
}

const Nesttats = ()=>{
  setInterval(() => {


    netstat.stats()
      .then(info => {
        console.log(info)
      })
  }, 5000);
}
const TotalMenUsage = ()=>{
  setInterval(() => {
    mem.info()
    .then(info => {
      console.log(info)
    })
  }, 3000)
}
// TotalMenUsage()
// TotalCpuUsage()
  
// var netstat = osu.netstat

// netstat.inOut()
//   .then(info => {
//     console.log(info)
//   })

// GET ALL RECIPES FROM API
router.get('/', (req, res, next) => {
  res.status(200).json("Hello World")
})
 



module.exports = router;