descricoes = {
    "C#": "C# é uma linguagem de programação moderna, orientada a objetos e de propósito geral, desenvolvida pela Microsoft, o C# é amplamente utilizado para desenvolvimento de aplicativos Windows, aplicativos móveis, jogos e aplicações empresariais. Ele é conhecido por sua segurança, desempenho e integração com a plataforma .NET da Microsoft.",
    ".NET": " .NET é uma plataforma poderosa e versátil que permite aos desenvolvedores criar aplicativos modernos e escaláveis para diferentes plataformas usando linguagens de programação como C# e aproveitando as bibliotecas e recursos avançados fornecidos pela plataforma.",
    "Azure": "A plataforma Azure é usada por organizações de todos os tamanhos e em diversas áreas, incluindo empresas, startups, instituições acadêmicas e governamentais. Ela oferece uma solução abrangente e confiável para hospedagem e gerenciamento de aplicativos e serviços na nuvem, permitindo a construção de soluções inovadoras, escaláveis e seguras.",
    "Windows": "Windows é um sistema operacional popular e amplamente utilizado que oferece uma plataforma confiável e poderosa para executar aplicativos e serviços em computadores pessoais. Ele é projetado para fornecer uma experiência de usuário intuitiva e é constantemente atualizado para atender às necessidades e demandas dos usuários.",
    "SQL-Server": "SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft, projetado para armazenar, acessar e gerenciar dados de forma eficiente e segura. Ele fornece recursos avançados para garantir a integridade dos dados e suporta uma ampla gama de aplicativos e casos de uso de negócios.",
    "TypeScript": "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela é uma extensão do JavaScript que adiciona recursos de tipagem estática e outros recursos avançados de programação orientada a objetos.",
    "GIT": "O Git é uma ferramenta poderosa que oferece recursos avançados, como ramificações e mesclagem eficientes, rastreamento de alterações, histórico completo e muito mais. Ele facilita a colaboração em equipe, a organização do trabalho e a manutenção de um registro completo das alterações ao longo do tempo.",
    "Javascript": "JavaScript é uma linguagem versátil e poderosa, com uma grande comunidade de desenvolvedores e uma vasta quantidade de recursos disponíveis. Ela desempenha um papel fundamental na construção de aplicações web modernas e interativas.",
}



function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

