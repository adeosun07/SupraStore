export default {
    home: (req,res) =>{
        res.render("index")
    },
    about: (req,res) =>{
        res.render("about")
    },
    contact: (req,res) =>{
        res.render("contact")
    },
    bestseller: (req,res) =>{
        res.render("bestseller")
    },
    product: (req,res) =>{
        res.render("product")
    }
}