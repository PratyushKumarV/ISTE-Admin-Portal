const mongoose=require('mongoose')

const ProjectSchema = new mongoose.Schema({
    project_name:{type: String},
    domain_name:{type:String},
    github_link:{type:String},
    size_of_team:{type:Number},
    project_manager:{type:String},
    reg_no:{type:String}
});

const Project = mongoose.model("projects",ProjectSchema);

module.exports=Project