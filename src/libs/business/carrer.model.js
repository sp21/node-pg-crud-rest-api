const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const Carrer = require('../../models/carrer')(sequelize, Sequelize);

Carrer.sync();
// exports.uploadBusinessImage = multer({
//     storage: multer.diskStorage({
//         destination: 'uploads/business-images/',
//         filename: function (req, file, callback) {
//             callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//         }
//     })
// }).single('businessImage'); 
// exports.createBusiness = (businessData) => {
//     return new Promise((resolve, reject) => {
//         Business.create(businessData).then(business => {
//             resolve(business);
//         },err=>{
//             reject({error:err});
//         });
//     });
// };
// exports.findBusinessById = () => {
//     return new Promise((resolve, reject) => {
//         Business.findByPk().then(business => {
//             if(business == null){
//                 reject({status:404,message:"Business not found"});
//             }
//             resolve(business);
//         },err=>{
//             reject({error:err});
//         })
//     });
// };
// exports.updateBusinessById = (businessData,id) => {
//     return new Promise((resolve, reject) => {
//         Business.update(businessData, {
//             where: {
//               id: id
//             }
//           }).then(business => {
//             Business.findByPk(id).then(business => {
//                 resolve(business);
//             },err1=>{
//                 reject({error:err1});
//             })
//         },err=>{
//             reject({error:err});
//         });
//     });
// };
// exports.deleteBusinessById = (id) => {
//     return new Promise((resolve, reject) => {
//         Business.destroy({
//             where: {
//               id: id
//             }
//           }).then(() => {
//             resolve({message:"Delete Successfull!!!"});
//         },err=>{
//             reject({error:err});
//         });
//     });
// }; 
exports.findAllCoach = () => {
    return new Promise((resolve, reject) => {
        Carrer.findAll({
            attributes: ['employee_number','name','email_id','role_designation','job_level','current_location','unit_name','subunit_name','eligible_for_batch3DL','enabled_batch','total_experience','experience_in_infosys','brief_profile','area_of_expertise','coaching_hours_deducted_per_week','areas_that_can_be_contributed_as_coach','area_of_enablement_required_to_be_carrer_coach','expertise_skillsets']
        }).then(business => {
            resolve(business);
        },err=>{
            reject({error:err});
        })
    });
}; 