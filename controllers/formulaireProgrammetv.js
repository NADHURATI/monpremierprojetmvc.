module.exports = {
    formulaireProgrammetvView: (req, res) => {
        const programmetv = [
            { titre: "Sambi tsara"},
            { poste: "Chaldi"},
            { horairedebut: "00:00:00"},
            { horairefin: "06:56:00"}
        ];
        res.render("formulaireProgrammetv", {programme: programmetv});
    }
}