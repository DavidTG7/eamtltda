const convenios = document.querySelectorAll(".cliente-icono");
const convenios_controls = document.querySelectorAll(".cliente__boton");

document.querySelectorAll(".cliente__boton").forEach((item) => {
    console.log(item);
    item.addEventListener("click", () => {
        console.log(item);
        convenios_controls.forEach(a => a.classList.remove('control_con_active'));
        item.classList.add('control_con_active')
        console.log(`Esto: ${item.classList}`)
        convenios.forEach(convenio => convenio.classList.add('con_desactive'));
        document.querySelectorAll(".convenio__items").forEach((convenio) => {
            if (item.id == "todos") {
                convenios.forEach(convenio => convenio.classList.remove('con_desactive'));
            } else {
                const cla = `${item.id}_item`
                const clases_convenio = convenio.classList.value;
                if (clases_convenio.match(cla)) {
                    convenio.classList.remove('con_desactive')
                    console.log(convenio.classList.value)
                };
            }
        })
    });
});