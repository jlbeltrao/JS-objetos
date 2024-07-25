const departamentos = [{
        id: 1,
        nome: "Vendas",
        funcionarios: [{
                id: 101,
                nome: "Ana",
                cargo: "Vendedor"
            },
            {
                id: 102,
                nome: "Carlos",
                cargo: "Gerente de vendas"
            }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [{
                id: 201,
                nome: "Maria",
                cargo: "Desenvolvedor"
            },
            {
                id: 202,
                nome: "João",
                cargo: "Analista de sistemas"
            }
        ]
    }
]

function encontrarFuncionarioPorId(idFuncionario) {
    let encontrado = false;
    departamentos.forEach(element => {
        element.funcionarios.forEach(element => {
            if (element.id === idFuncionario) {
                console.log(element);
                encontrado = true;
            };
        });
    });
    if (encontrado === false) {
        console.log(`ID não encontrado.`);
    };
};

encontrarFuncionarioPorId(104);