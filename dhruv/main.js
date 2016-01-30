// Test Cases
var jsonData = {"id":300,"bed_count":200,"visiting_guidelines":[{"heading":"Family Involvement","guidelines":"1. Family members and close friends are encouraged to be a part of the care process, whenever appropriate. Your consultant doctor at the hospital and the nursing staff must however first give permission for you to be the part of the care process. Permission from the management is also required for stay after visiting hours. This will be given on written application.\n\n2. In the rooms/wards only one attendant may stay with the patient. A pass has to be obtained from front office. The security may ask for the pass. Please keep the pass ready for the information.\n\n3. Flowers are not allowed in the In-patients Areas.\n\n4. Outside or home food is not permitted.\n\n5. Nurse may ask visitors to leave the room if the patientâ€™s condition so warrants or if hospital policies are not being followed. Your co-operation is solicited.\n"},{"heading":"Visiting Norms","guidelines":"Wards:\n1. Attendantâ€™s pass will allow the bearer of the pass to enter the hospital at any time until the patient is discharged.\n\n2. A visitorâ€™s pass will be valid from 5pm to 7pm only. For all days.\n\n3. The nurses will encourage the relatives, in the interest of the patient, to keep visits to the minimum during visiting hours.\n\n4. Extra visitors can wait in atrium lobby and they can not come up unless and until bearer of the visitorâ€™s pass goes down and hands over the pass.\n\n5. This will be applicable for all days including Public Holiday and Sunday.\n\n6. Visiting Hours â€“ ICU / ICCU:\nVisitors are restricted in ICU and ICCU. However one relative with attendant pass can visit/wait in the ICU wait area."}],"speciality_type":"multi","specialities":[{"id":30,"name":"Anaesthesia"},{"id":36,"name":"Cardiology"},{"id":129,"name":"Cardio Thoracic & Vascular Surgery (CTVS)"},{"id":116,"name":"Cardiorespiratory Physiotherapy"},{"id":101,"name":"Critical Care Medicine"},{"id":23,"name":"Dentistry"},{"id":42,"name":"Diabetology"},{"id":21,"name":"Dietician / Nutritionist"},{"id":133,"name":"Endocrinology & Metabolism"},{"id":73,"name":"Endocrinology"},{"id":59,"name":"Ear Nose Throat Surgery (ENT)"},{"id":74,"name":"Family Medicine"},{"id":167,"name":"Urology"},{"id":55,"name":"Obstetrics & Gynaecology"},{"id":166,"name":"Thoracic Surgery"},{"id":165,"name":"Surgical Oncology"},{"id":66,"name":"Sports Medicine"},{"id":76,"name":"Rheumatology"},{"id":53,"name":"Radio Diagnosis"},{"id":163,"name":"Pulmonary Medicine & Critical Care"},{"id":62,"name":"Psychology"},{"id":92,"name":"Psychiatry"},{"id":89,"name":"Paediatric Surgery"},{"id":37,"name":"Paediatrics"},{"id":58,"name":"Orthopaedics"},{"id":57,"name":"Ophthalmology / Eye Surgery"},{"id":134,"name":"Gastro & Human Nutrition Unit"},{"id":86,"name":"Neuro Surgery"},{"id":85,"name":"Nephrology"},{"id":54,"name":"Microbiology"},{"id":77,"name":"Medical Oncology"},{"id":144,"name":"Histo Compatibility & Immunogenetics"},{"id":83,"name":"General Surgery"},{"id":143,"name":"Hepatology"},{"id":96,"name":"Infectious Diseases"},{"id":70,"name":"General Medicine"},{"id":40,"name":"Dermatology, Venereology & Leprosy (Skin)"}],"business":{"name":"Dr L H Hiranandani Hospital","booking":true,"rating":null,"address":"Hill Side Avenue,  Hiranandani Gardens","is_24x7":true,"geolocation":[19.1204355750098,72.9171217605472],"timing_applicable":true,"total_like":2,"total_review":0,"awards":null,"clean_rating":150.0,"staff_rating":123.0,"wait_time":810,"care_rating":130.0,"appointment_ease":133.0,"has_homeservice":false,"locality":{"id":6,"name":"Powai"},"city":{"id":1,"name":"Mumbai"},"timing":{"sun":[{"from":0,"to":2359}],"mon":[{"from":0,"to":2359}],"tue":[{"from":0,"to":2359}],"wed":[{"from":0,"to":2359}],"thu":[{"from":0,"to":2359}],"fri":[{"from":0,"to":2359}],"sat":[{"from":0,"to":2359}]},"profile_pic":{"id":1839,"url":"https://static.pstakecare.com/media/profile/f67142c572b54b9f93171d479e739faahiranandani_hospital_600x450.jpg","caption":null,"media_type":"image"}}};
var jsonData1 = {"id":300,"bed_count":200,"visiting_guidelines":[{"heading":"Family Involvement","guidelines":"1. Family members and close friends are encouraged to be a part of the care process, whenever appropriate. Your consultant doctor at the hospital and the nursing staff must however first give permission for you to be the part of the care process. Permission from the management is also required for stay after visiting hours. This will be given on written application.\n\n2. In the rooms/wards only one attendant may stay with the patient. A pass has to be obtained from front office. The security may ask for the pass. Please keep the pass ready for the information.\n\n3. Flowers are not allowed in the In-patients Areas.\n\n4. Outside or home food is not permitted.\n\n5. Nurse may ask visitors to leave the room if the patientâ€™s condition so warrants or if hospital policies are not being followed. Your co-operation is solicited.\n"},{"heading":"Visiting Norms","guidelines":"Wards:\n1. Attendantâ€™s pass will allow the bearer of the pass to enter the hospital at any time until the patient is discharged.\n\n2. A visitorâ€™s pass will be valid from 5pm to 7pm only. For all days.\n\n3. The nurses will encourage the relatives, in the interest of the patient, to keep visits to the minimum during visiting hours.\n\n4. Extra visitors can wait in atrium lobby and they can not come up unless and until bearer of the visitorâ€™s pass goes down and hands over the pass.\n\n5. This will be applicable for all days including Public Holiday and Sunday.\n\n6. Visiting Hours â€“ ICU / ICCU:\nVisitors are restricted in ICU and ICCU. However one relative with attendant pass can visit/wait in the ICU wait area."}],"speciality_type":"multi","specialities":[{"id":30,"name":"Anaesthesia"},{"id":36,"name":"Cardiology"},{"id":129,"name":"Cardio Thoracic & Vascular Surgery (CTVS)"},{"id":116,"name":"Cardiorespiratory Physiotherapy"},{"id":101,"name":"Critical Care Medicine"},{"id":23,"name":"Dentistry"},{"id":42,"name":"Diabetology"},{"id":21,"name":"Dietician / Nutritionist"},{"id":133,"name":"Endocrinology & Metabolism"},{"id":73,"name":"Endocrinology"},{"id":59,"name":"Ear Nose Throat Surgery (ENT)"},{"id":74,"name":"Family Medicine"},{"id":167,"name":"Urology"},{"id":55,"name":"Obstetrics & Gynaecology"},{"id":166,"name":"Thoracic Surgery"},{"id":165,"name":"Surgical Oncology"},{"id":66,"name":"Sports Medicine"},{"id":76,"name":"Rheumatology"},{"id":53,"name":"Radio Diagnosis"},{"id":163,"name":"Pulmonary Medicine & Critical Care"},{"id":62,"name":"Psychology"},{"id":92,"name":"Psychiatry"},{"id":89,"name":"Paediatric Surgery"},{"id":37,"name":"Paediatrics"},{"id":58,"name":"Orthopaedics"},{"id":57,"name":"Ophthalmology / Eye Surgery"},{"id":134,"name":"Gastro & Human Nutrition Unit"},{"id":86,"name":"Neuro Surgery"},{"id":85,"name":"Nephrology"},{"id":54,"name":"Microbiology"},{"id":77,"name":"Medical Oncology"},{"id":144,"name":"Histo Compatibility & Immunogenetics"},{"id":83,"name":"General Surgery"},{"id":143,"name":"Hepatology"},{"id":96,"name":"Infectious Diseases"},{"id":70,"name":"General Medicine"},{"id":40,"name":"Dermatology, Venereology & Leprosy (Skin)"}],"business":{"name":"Dr L H Hiranandani Hospital","booking":true,"rating":null,"address":"Hill Side Avenue,  Hiranandani Gardens","is_24x7":true,"geolocation":[19.1204355750098,72.9171217605472],"timing_applicable":true,"total_like":2,"total_review":0,"awards":null,"clean_rating":150.0,"staff_rating":123.0,"wait_time":810,"care_rating":130.0,"appointment_ease":133.0,"has_homeservice":false,"locality":{"id":6,"name":"Powai"},"city":{"id":1,"name":"Mumbai"},"timing":{"sun":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"mon":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"tue":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"wed":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"thu":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"fri":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"sat":[{"from":0,"to":1500}, {"from":1500,"to":2359}]},"profile_pic":{"id":1839,"url":"https://static.pstakecare.com/media/profile/f67142c572b54b9f93171d479e739faahiranandani_hospital_600x450.jpg","caption":null,"media_type":"image"}}};
var jsonData2 = {"id":300,"bed_count":200,"visiting_guidelines":[{"heading":"Family Involvement","guidelines":"1. Family members and close friends are encouraged to be a part of the care process, whenever appropriate. Your consultant doctor at the hospital and the nursing staff must however first give permission for you to be the part of the care process. Permission from the management is also required for stay after visiting hours. This will be given on written application.\n\n2. In the rooms/wards only one attendant may stay with the patient. A pass has to be obtained from front office. The security may ask for the pass. Please keep the pass ready for the information.\n\n3. Flowers are not allowed in the In-patients Areas.\n\n4. Outside or home food is not permitted.\n\n5. Nurse may ask visitors to leave the room if the patientâ€™s condition so warrants or if hospital policies are not being followed. Your co-operation is solicited.\n"},{"heading":"Visiting Norms","guidelines":"Wards:\n1. Attendantâ€™s pass will allow the bearer of the pass to enter the hospital at any time until the patient is discharged.\n\n2. A visitorâ€™s pass will be valid from 5pm to 7pm only. For all days.\n\n3. The nurses will encourage the relatives, in the interest of the patient, to keep visits to the minimum during visiting hours.\n\n4. Extra visitors can wait in atrium lobby and they can not come up unless and until bearer of the visitorâ€™s pass goes down and hands over the pass.\n\n5. This will be applicable for all days including Public Holiday and Sunday.\n\n6. Visiting Hours â€“ ICU / ICCU:\nVisitors are restricted in ICU and ICCU. However one relative with attendant pass can visit/wait in the ICU wait area."}],"speciality_type":"multi","specialities":[{"id":30,"name":"Anaesthesia"},{"id":36,"name":"Cardiology"},{"id":129,"name":"Cardio Thoracic & Vascular Surgery (CTVS)"},{"id":116,"name":"Cardiorespiratory Physiotherapy"},{"id":101,"name":"Critical Care Medicine"},{"id":23,"name":"Dentistry"},{"id":42,"name":"Diabetology"},{"id":21,"name":"Dietician / Nutritionist"},{"id":133,"name":"Endocrinology & Metabolism"},{"id":73,"name":"Endocrinology"},{"id":59,"name":"Ear Nose Throat Surgery (ENT)"},{"id":74,"name":"Family Medicine"},{"id":167,"name":"Urology"},{"id":55,"name":"Obstetrics & Gynaecology"},{"id":166,"name":"Thoracic Surgery"},{"id":165,"name":"Surgical Oncology"},{"id":66,"name":"Sports Medicine"},{"id":76,"name":"Rheumatology"},{"id":53,"name":"Radio Diagnosis"},{"id":163,"name":"Pulmonary Medicine & Critical Care"},{"id":62,"name":"Psychology"},{"id":92,"name":"Psychiatry"},{"id":89,"name":"Paediatric Surgery"},{"id":37,"name":"Paediatrics"},{"id":58,"name":"Orthopaedics"},{"id":57,"name":"Ophthalmology / Eye Surgery"},{"id":134,"name":"Gastro & Human Nutrition Unit"},{"id":86,"name":"Neuro Surgery"},{"id":85,"name":"Nephrology"},{"id":54,"name":"Microbiology"},{"id":77,"name":"Medical Oncology"},{"id":144,"name":"Histo Compatibility & Immunogenetics"},{"id":83,"name":"General Surgery"},{"id":143,"name":"Hepatology"},{"id":96,"name":"Infectious Diseases"},{"id":70,"name":"General Medicine"},{"id":40,"name":"Dermatology, Venereology & Leprosy (Skin)"}],"business":{"name":"Dr L H Hiranandani Hospital","booking":true,"rating":null,"address":"Hill Side Avenue,  Hiranandani Gardens","is_24x7":true,"geolocation":[19.1204355750098,72.9171217605472],"timing_applicable":true,"total_like":2,"total_review":0,"awards":null,"clean_rating":150.0,"staff_rating":123.0,"wait_time":810,"care_rating":130.0,"appointment_ease":133.0,"has_homeservice":false,"locality":{"id":6,"name":"Powai"},"city":{"id":1,"name":"Mumbai"},"timing":{"sun":[{"from":0,"to":2359}],"mon":[{"from":0,"to":2359}],"tue":[{"from":0,"to":2359}],"thu":[{"from":0,"to":2359}],"fri":[{"from":0,"to":2359}]},"profile_pic":{"id":1839,"url":"https://static.pstakecare.com/media/profile/f67142c572b54b9f93171d479e739faahiranandani_hospital_600x450.jpg","caption":null,"media_type":"image"}}};
var jsonData3 = {"id":300,"bed_count":200,"visiting_guidelines":[{"heading":"Family Involvement","guidelines":"1. Family members and close friends are encouraged to be a part of the care process, whenever appropriate. Your consultant doctor at the hospital and the nursing staff must however first give permission for you to be the part of the care process. Permission from the management is also required for stay after visiting hours. This will be given on written application.\n\n2. In the rooms/wards only one attendant may stay with the patient. A pass has to be obtained from front office. The security may ask for the pass. Please keep the pass ready for the information.\n\n3. Flowers are not allowed in the In-patients Areas.\n\n4. Outside or home food is not permitted.\n\n5. Nurse may ask visitors to leave the room if the patientâ€™s condition so warrants or if hospital policies are not being followed. Your co-operation is solicited.\n"},{"heading":"Visiting Norms","guidelines":"Wards:\n1. Attendantâ€™s pass will allow the bearer of the pass to enter the hospital at any time until the patient is discharged.\n\n2. A visitorâ€™s pass will be valid from 5pm to 7pm only. For all days.\n\n3. The nurses will encourage the relatives, in the interest of the patient, to keep visits to the minimum during visiting hours.\n\n4. Extra visitors can wait in atrium lobby and they can not come up unless and until bearer of the visitorâ€™s pass goes down and hands over the pass.\n\n5. This will be applicable for all days including Public Holiday and Sunday.\n\n6. Visiting Hours â€“ ICU / ICCU:\nVisitors are restricted in ICU and ICCU. However one relative with attendant pass can visit/wait in the ICU wait area."}],"speciality_type":"multi","specialities":[{"id":30,"name":"Anaesthesia"},{"id":36,"name":"Cardiology"},{"id":129,"name":"Cardio Thoracic & Vascular Surgery (CTVS)"},{"id":116,"name":"Cardiorespiratory Physiotherapy"},{"id":101,"name":"Critical Care Medicine"},{"id":23,"name":"Dentistry"},{"id":42,"name":"Diabetology"},{"id":21,"name":"Dietician / Nutritionist"},{"id":133,"name":"Endocrinology & Metabolism"},{"id":73,"name":"Endocrinology"},{"id":59,"name":"Ear Nose Throat Surgery (ENT)"},{"id":74,"name":"Family Medicine"},{"id":167,"name":"Urology"},{"id":55,"name":"Obstetrics & Gynaecology"},{"id":166,"name":"Thoracic Surgery"},{"id":165,"name":"Surgical Oncology"},{"id":66,"name":"Sports Medicine"},{"id":76,"name":"Rheumatology"},{"id":53,"name":"Radio Diagnosis"},{"id":163,"name":"Pulmonary Medicine & Critical Care"},{"id":62,"name":"Psychology"},{"id":92,"name":"Psychiatry"},{"id":89,"name":"Paediatric Surgery"},{"id":37,"name":"Paediatrics"},{"id":58,"name":"Orthopaedics"},{"id":57,"name":"Ophthalmology / Eye Surgery"},{"id":134,"name":"Gastro & Human Nutrition Unit"},{"id":86,"name":"Neuro Surgery"},{"id":85,"name":"Nephrology"},{"id":54,"name":"Microbiology"},{"id":77,"name":"Medical Oncology"},{"id":144,"name":"Histo Compatibility & Immunogenetics"},{"id":83,"name":"General Surgery"},{"id":143,"name":"Hepatology"},{"id":96,"name":"Infectious Diseases"},{"id":70,"name":"General Medicine"},{"id":40,"name":"Dermatology, Venereology & Leprosy (Skin)"}],"business":{"name":"Dr L H Hiranandani Hospital","booking":true,"rating":null,"address":"Hill Side Avenue,  Hiranandani Gardens","is_24x7":true,"geolocation":[19.1204355750098,72.9171217605472],"timing_applicable":true,"total_like":2,"total_review":0,"awards":null,"clean_rating":150.0,"staff_rating":123.0,"wait_time":810,"care_rating":130.0,"appointment_ease":133.0,"has_homeservice":false,"locality":{"id":6,"name":"Powai"},"city":{"id":1,"name":"Mumbai"},"timing":{"mon":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"tue":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"wed":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"thu":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"fri":[{"from":0,"to":1500}, {"from":1500,"to":2359}],"sat":[{"from":0,"to":1500}, {"from":1500,"to":2359}]},"profile_pic":{"id":1839,"url":"https://static.pstakecare.com/media/profile/f67142c572b54b9f93171d479e739faahiranandani_hospital_600x450.jpg","caption":null,"media_type":"image"}}};




// Code
var _DaysMap = {
	"sun": "Sunday", 
	"mon": "Monday", 
	"tue": "Tuesday", 
	"wed": "Wednesday", 
	"thu": "Thursday", 
	"fri": "Friday", 
	"sat": "Saturday"
};

function toDayName(day){ return _DaysMap[day] };
function add(x, y){
	return x + y;
}
function truth(x,y){
	return ( x === true && y === true ) ? true : false;
}
function toTime(num){
	var str = num.toString()
		, min = str === "0" ? "00" : str.substr(-2)
		, hrs = str === "0" ? "0"  : str.substr(0, str.length - min.length)
		, suffix = parseInt(hrs) < 12 ? 'AM' : 'PM';
	var h = parseInt(hrs);
	h = (h > 12 ? h -12 : h).toString();
	return h + ':' + min.toString() + ' ' + suffix;
}

function toSlot(obj){
	return toTime(obj.from) + ' ' + toTime(obj.to);
}
function toSlots(day_arr){
	return day_arr.map(toSlot).join(' , ');
}

var responses = {
	0: 'error',
	1: '24x7',
	2: function(opens, days_off){
		var closes = days_off.map(toDayName).join(' ');
		return ( 
			closes.length
				? opens + ' except ' + closes
				: opens
		);
	}
};



// Assuming 
// 	minimum _from = 000
// 	maximum _to   = 2359
function isOpen247(timing){
	return function(day){
		var slots = timing[day];

		if (!slots.length){ return false }

		var _from = _.pluck(slots, 'from').reduce(add);
		var _to   = _.pluck(slots, 'to').reduce(add);

		return (_from + _to === 2359) ? true : false;
	}
}

function parseData(data){
	var timing = data.business.timing;
	var msg = '';

	var days = _.keys(timing);
	var isOpenAllDays = days.map(isOpen247(timing)).reduce(truth);
	// console.log(days);
	// console.log(isOpenAllDays);

	if (isOpenAllDays && days.length === 7){
		msg = responses[1];
	}
	else{
		var days_off = _.difference( _.keys(_DaysMap), days );
		var days_on  = _.without( days, days_off );

		var sample = _.first(days_on);
		var slot   = toSlots(timing[sample]);

		msg = responses[2](slot, days_off);
	}

	return msg;
}

(function(angular) {
  'use strict';
angular.module('displayTimings', [])
  .controller('displayTimingController', ['$scope','$http', function($scope,$http) {
	angular.element(document).ready(function () {
    $http({method: 'GET', url: 'hospitalDetail.json', responseType: "json"}).
      success(function(data, status) {
	console.log(data);
        $scope.status = status;
        $scope.data = {
	     repeatSelect: null,
     	     availableOptions: [jsonData],
    	};

      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
$scope.data = {
             repeatSelect: null,
             availableOptions: [jsonData],
        };
$scope.update = function() {
        $scope.timing = parseData(jsonData3);
      };


  });
	
console.log($scope.data); 
 }]);
})(window.angular);
var output = parseData(jsonData3);
console.log('Output: ', output);
