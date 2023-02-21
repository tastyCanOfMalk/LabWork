var inventory = []

module.exports.getInventory = function() {
	    return inventory
}

module.exports.addVehicle = function(v) {
	let existing = inventory.find(item => item.VIN === v.VIN)
	
	if (existing !== undefined) {
		//Update
		Object.assign(existing, v)
	} else {
		//Add
		inventory.push(v)
	}
}

module.exports.updateVehicle = function(oldVIN, newVehicle) {
	    const oldVehicle = inventory.find(
	      v => v.VIN === oldVIN)

	    if (oldVehicle != undefined) {
	      Object.assign(oldVehicle, newVehicle)
	    }
}

module.exports.deleteVehicle = function(vin) {
	   inventory = inventory.filter(v => v.VIN !== vin)
}
