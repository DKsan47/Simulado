var myQuestions = [
	{
		question: "1- Com o uso do Windows Server 2012 podemos criar e gerenciar volumes da mesma maneira que criamos e gerenciamos partições, isso porque, um volume é uma seção de uma unidade que pode ser usado para armazenar dados diretamente. Como é chamado o disco onde podemos realizar o seu gerenciamento criando volumes que abrangem várias unidades, onde os arquivos são armazenados segmento a segmento e que permite utilizar seu espaço livre criando um sistema de arquivo utilizável?<br><br>",
		answers: {
			a: 'Disco Básico.<br>',
			b: 'Disco Dinâmico.<br>',
			c: 'Disco Operacional.<br>',
			d: 'Disco Estático.<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "2- Além de contas de usuário, o Windows Server permite criar e gerenciar grupos, que de um modo geral, é utilizado para simplificar o gerenciamento, uma vez que podemos agrupar contas de usuário que tenham algo em comum. Em uma rede corporativa baseada no Windows Server 2012, há dois tipos de grupo: o grupo de segurança, que são utilizados para controlar a segurança do acesso aos recursos; e o grupo que é usado por aplicativos de e-mail e faz com que uma mensagem seja enviada a todos os membros do grupo.\n\
Como é conhecido esse último tipo de grupo citado?<br><br>",
		answers: {
			a: 'Grupo de Gerenciamento.<br>',
			b: 'Grupo Corporativo<br>',
			c: 'Grupo de Correio Eletrônico.<br>',
			d: 'Grupo de Distribuição.<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "3- Para que um domínio possa autenticar usuários de outros domínios, bem como replicar serviços, desde que, autorizados pelo administrador da rede, de acordo com o cenário da empresa, torna-se indispensável a configuração de:<br><br>",
		answers: {
			a: 'Relações de confiança entre os domínios;<br>',
			b: 'Políticas de segurança de domínio;<br>',
			c: 'Serviço de resolução de nomes (DNS);<br>',
			d: 'Escopo de endereçamento IP correto;<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "4- A função desse Servidor no Windows Server 2012 é oferecer uma plataforma segura, com gerenciamento fácil, modular e extensível para a hospedagem confiável de sites, serviços e aplicativos. Com ele podemos compartilhar informações com usuários na Internet, em uma intranet ou extranet. Além de permitir o uso do serviço de FTP.\n\
Sobre qual Servidor trata a definição?<br><br>",
		answers: {
			a: 'Servidor de Domínio.<br>',
			b: 'Servidor IIS.<br>',
			c: 'Servidor de Arquivos.<br>',
			d: 'Servidor de proxy.<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "5- Os Logs de eventos fornecem informações significativas que podem ajudar a rastrear problemas de sistema e de segurança, além de controlar como os eventos são monitorados. Quando iniciamos este serviço, podemos acompanhar as ações do usuário e eventos de uso de recursos por meio de logs de eventos. Dois tipos gerais de log são usados.\n\
Quais são esses?<br><br>",
		answers: {
			a: 'Log de Instalação e Log de Sistema.<br>',
			b: 'Log de Aplicativos e Log de Segurança.<br>',
			c: 'Log do Windows e Log de Aplicativos e Serviços<br>',
			d: 'Log de erros e Log de Eventos<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "6- Um servidor com a função DHCP instalada e configurada atribuir dinamicamente as informações de configuração TCP/IP aos computadores clientes da rede. No entanto, um procedimento para que essa configuração seja realizada de forma correta é a autorização. Observe as opções a seguir e escolha aquela que justifica porque é necessário autorizar o servidor DHCP?<br><br>",
		answers: {
			a: 'Para que ele possa distribuir as configurações TCP/IP de forma dinâmica.<br>',
			b: 'Porque há mais de dois servidores na mesma rede.<br>',
			c: 'Porque as distribuições das configurações TCP/IP também podem ser realizadas de forma estática.<br>',
			d: 'Para que ele possa exibir as configurações TCP/IP.<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "7- Hyper-V é uma tecnologia de virtualização da Microsoft que permite vários sistemas operacionais convidados executarem simultaneamente máquinas virtuais em um computador. Dessa forma ao implementar o Hyper-V qual funcionalidade será possível explorar. Observe as afirmações a seguir e determine qual está correta.<br><br>",
		answers: {
			a: 'A camada de software necessária para a instalação de sistemas operacionais convidados.<br>',
			b: 'A imagens dos sistemas operacionais cliente.<br>',
			c: 'O software necessário para a instalação de sistemas operacionais clientes e também a virtualização dos computadores clientes da mesma rede.<br>',
			d: 'Acesso a aplicações e serviços em conjunto nos computadores clientes<br>',
			e: 'As licenças das máquinas virtuais.<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "8- Em uma infraestrutura de rede muito serviços são necessários, entre eles o WINS, sendo assim, responda qual a principal funcionalidade desempenhada pelo servidor WINS em uma rede. Observe as afirmações a seguir e escolha a correta.<br><br>",
		answers: {
			a: 'Realizar resolução de nomes, mapeando nomes de computador para endereços nomes.<br>',
			b: 'Realizar resolução de nomes, mapeando nomes de computador para endereços IP.<br>',
			c: 'Registrar configurações TCP/IP de forma a descobrir o nome do host.<br>',
			d: 'Permitir que os computadores se registrem e resolvam nomes NetBIOS em uma rede.<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "9- Quando há mais de um domínio pertencente a uma organização, quem determina que uma conta de usuário armazenada em um domínio seja autenticada em outro domínio?<br><br>",
		answers: {
			a: 'Domínio<br>',
			b: 'Administrador de redes<br>',
			c: 'Relação de Confiança<br>',
			d: 'Floresta<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "10- Quando se pensa em mudar seu negócio para ingressar na computação em nuvem, encontramos três modelos de serviços padrão para a sua implantação. Assim, qual nome é dado ao modelo que diz que: “O provedor de nuvem é executado em um data Center que oferece máquinas virtuais para alugar, juntamente com recursos alocados dinamicamente?<br><br>",
		answers: {
			a: 'IaaS<br>',
			b: 'IPaaS<br>',
			c: 'SaaS<br>',
			d: 'PaaS<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "11- O Domain Name System (DNS) foi criado para resolução de nomes de domínio para endereço de rede (IP). Sendo assim, analise as afirmações a seguir e posteriormente escolha a alternativa correta.<br><br>\n\
1: O DNS é um serviço de resolução de nomes que mapeia nomes de computador para endereços IP.<br>\n\
2: O DNS opera sobre a pilha de protocolos TCP/IP.<br>\n\
3: Para fornecer esse serviço, o DNS utiliza um banco de dados contendo informações de nomes de computadores e endereços IP.<br>\n\
4: Para obter um endereço DNS o computador servidor DNS inicia uma consulta junto ao cliente DNS.<br><br>\n\
Escolha a alternativa correta:<br><br>",
		answers: {
			a: 'Somente a afirmação 1 está correta.<br>',
			b: 'As afirmações 1, 2 e 4 estão corretas.<br>',
			c: 'As afirmações 1, 2 e 3 estão corretas.<br>',
			d: 'Somente a afirmação 3 está correta.<br>',
			e: 'As afirmações 2, 4 estão corretas.<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "12- Através do serviço Dynamic Host Configuration Protocol (DHCP) é possível atribuir dinamicamente as informações de configuração TCP/IP aos computadores clientes da rede. Sendo assim, analise as afirmações a seguir e posteriormente escolha a alternativa correta.<br><br>\n\
1: O serviço DHCP permite controlar de forma centralizada o endereçamento IP.<br>\n\
2: As configurações TCP/IP são entregues aos computadores clientes de forma definitiva.<br>\n\
3: O serviço DHCP não consegue entregar a informação sobre o endereço do roteador da rede a qual o computador cliente participa.<br>\n\
4: Um computador que utiliza uma configuração de endereçamento dinâmico IPv4 proveniente do servidor DHCP é chamado de cliente DNS.<br><br>\n\
Escolha a alternativa correta:<br><br>",
		answers: {
			a: 'Somente a afirmação 3 está correta.<br>',
			b: 'As afirmações 1, 2 e 4 estão corretas.<br>',
			c: 'As afirmações 1 e 3 estão corretas.<br>',
			d: 'As afirmações 2, 4 estão corretas.<br>',
			e: 'Somente a afirmação 1 está correta.<br>'
		},
		correctAnswer: 'e'
	},
	{
		question: "13- O Serviço de Domínio do Active Directory (AD DS) e seus serviços relacionados formam a base para as redes corporativas que executam sistemas operacionais Windows. Sendo assim, analise as afirmações a seguir e posteriormente escolha a alternativa correta.<br><br>\n\
1: O banco de dados existente do AD DS armazena informações sobre a identidade de usuário, contas de computadores, grupos e recursos.<br>\n\
2: Os controladores de domínio também hospedam o serviço que autentica contas de usuário e computador quando eles fazem logon no domínio.<br>\n\
3: O AD DS permite pesquisar informações armazenadas diretório, como por exemplo, possível obter informações sobre um recurso (impressora) armazenado no diretório da mesma forma que se pode obter informações sobre um usuário.<br><br>\n\
Escolha a alternativa correta:<br><br>",
		answers: {
			a: 'As afirmações 2 e 3 estão corretas.<br>',
			b: 'As afirmações 1 e 3 estão corretas.<br>',
			c: 'Somente a afirmação 1 está correta.<br>',
			d: 'As afirmações 1, 2 e 3 estão corretas.<br>',
			e: 'Somente a afirmação 2 está correta.<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "14- Cada recurso que se deseja representar no diretório é conhecido como um objeto, sendo assim, cada objeto criado dentro do diretório é classificado como de um tipo ou classe particular. Observe as alternativas a seguir e escolha aquela que representa um objeto.<br><br>",
		answers: {
			a: 'Active Diretory (AD)<br>',
			b: 'Domínios do Active Directory (AD)<br>',
			c: 'Servidor DHCP<br>',
			d: 'Servidor DNS<br>',
			e: 'Usuário'
		},
		correctAnswer: 'e'
	},
	{
		question: "15- Cada domínio do Active Directory tem um nome de domínio no formato DNS, como por exemplo, empresa.br. Desse modo, um ou mais domínios que compartilham os mesmos dados de diretório fazem parte da mesma. Observe as alternativas a seguir e escolha aquela que contém a resposta correta.<br><br>",
		answers: {
			a: 'Floresta<br>',
			b: 'Área Servidor DNS<br>',
			c: 'Estrutura de Domínios do Active Directory (AD)<br>',
			d: 'Árvore<br>',
			e: 'Rede do servidor DHCP<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "16- Os administradores de rede que utilizam cotas de disco, monitoraram e controlam a quantidade de espaço em disco que os usuários em uma rede utilizam para armazenar e dados suas pastas, sendo assim, para utilizar o gerenciamento de cotas é preciso. Observe as seguintes afirmações.<br><br>\n\
I. Configurar o sistema de quotas de disco para monitorar apenas o uso de espaço em disco, permitindo que os administradores verifiquem o uso de espaço em disco manualmente.<br>\n\
II. Configurar o sistema de cota de disco para monitorar o uso de espaço em disco e gerar avisos quando os usuários excederem os níveis de utilização predefinidas.<br>\n\
III. Configurar o sistema de cota de disco para monitorar o uso de espaço em disco, gerar avisos quando os usuários excederem os níveis de utilização predefinidas, e fazer cumprir os limites ao negar espaço em disco aos usuários que excedem o limite de cota.<br>\n\
IV. As cotas de disco são configuradas por volume (disco).<br><br>\n\
Escolha a opção correta:<br><br>",
		answers: {
			a: 'As afirmações I e II estão corretas.<br>',
			b: 'Todas as afirmações estão corretas.<br>',
			c: 'As afirmações I, II e III estão corretas.<br>',
			d: 'As afirmações III e IV estão corretas.<br>',
			e: 'Somente a afirmação IV está correta.<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "17- As permissões de pasta compartilhada são atribuídas a usuários, grupos ou computadores. Essas permissões são aplicadas a todo o conteúdo da pasta compartilhada para os usuários que acessam a pasta através da rede. Portanto, toda vez que uma pasta compartilhada é criada a permissão padrão e grupo associado a essa pasta compartilhada será:<br>\n\
Observe as seguintes opções e escolha a correta:<br><br>",
		answers: {
			a: 'Permissão Leitura para o grupo Administradores.<br>',
			b: 'Permissão Leitura para o grupo Todos<br>',
			c: 'Permissão Leitura e Alterar<br>',
			d: 'Permissão Leitura e Alterar para o grupo Usuários.<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "18- As políticas de grupo estão relacionadas um conjunto de regras e, assim, ajudam a gerenciar objetos como usuários e computadores. Sendo assim, utilizar políticas de grupo permite controlar o ambiente escolhendo tarefas relacionadas. Observe as afirmações a seguir e, em seguida, selecione aquela que apresenta um conceito ERRADO em relação a políticas de grupo.<br><br>",
		answers: {
			a: 'Controlar o acesso aos componentes do Windows, sendo que não é possível negar o acesso os recursos do sistema.<br>',
			b: 'Definir scripts de usuário e de computador para executar em horários especificados.<br>',
			c: 'Criar diretórios gerenciados centralmente para pastas especiais, como a pasta Documentos do usuário.<br>',
			d: 'Configurar políticas para o bloqueio de conta e senhas, auditoria, atribuição de direitos de usuário e segurança.<br> '
		},
		correctAnswer: 'a'
	},
	{
		question: "19- As políticas de conta de usuário tem como função proteger as contas e os dados dos usuários em uma rede, reduzindo a possibilidade de descoberta de nome de usuário e a senha. Sendo assim, a política de senha contém um item que especifica que as senhas devem “Conter uma combinação de pelo menos três dos seguintes tipos de caracteres: letras maiúsculas, letras minúsculas, números e símbolos”.\n\
Observe as seguintes opções e escolha aquela relacionada a essa política<br><br>",
		answers: {
			a: 'A Política de senha.<br>',
			b: 'A senha deve satisfazer a requisitos de complexidade.<br>',
			c: 'Impor histórico de senha e requisitos de complexidade.<br>',
			d: 'Tempo de vida mínimo da senha.<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "20- O compartilhamento de arquivos realizado em um computador determina a forma como esses arquivos podem ser compartilhados. Existem dois modelos de compartilhamento de arquivos suportados pelo Windows Server 2012, sendo que um deles permite que usuários remotos acessem arquivos, pastas e unidades na rede. Assim, quando realizado o compartilhamento de uma pasta ou uma unidade, todos os seus arquivos e subpastas se tornam disponíveis para um conjunto específico de usuários.\n\
		Dessa forma, assinale a alternativa correta que se refere ao modelo de compartilhamento em questão.<br><br>",
		answers: {
			a: 'Compartilhamento de pasta pública.<br>',
			b: 'Compartilhamento de Memória RAM.<br>',
			c: 'Compartilhamento de arquivos padrão.<br>',
			d: 'Compartilhamento de memória compartilhada.<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "21- Um processo, é formado por três partes, que juntas, mantêm todas as informações necessárias à execução de um programa. É correto afirmar que:<br><br>",
		answers: {
			a: 'o espaço de endereçamento armazena o conteúdo dos registradores gerais da CPU, além dos registradores de uso específico, como program conter (PC), stack pointer (SP) e registrador de status(PSW).<br>',
			b: 'o contexto de hardware de um processo é composto por três grupos de informações sobre o processo: identificação, quotas e privilégios.<br>',
			c: 'o contexto de hardware mantém informações dos registradores do processador, enquanto um processo está em execução, mas não pode salvá-las caso o processo seja interrompido..<br>',
			d: 'o contexto de software armazena o conteúdo dos registradores gerais da CPU, além dos registradores de uso específico, como program counter(PC), stack pointer (SP) e registrador de status(PSW).<br>',
			e: 'o contexto de hardware mantém informações dos registradores do processador, enquanto um processo está em execução, podendo salvá-las caso o processo seja interrompido.<br>'
		},
		correctAnswer: 'e'
	},
	{
		question: "22- Comparando estes dois sistemas pode-se afirmar que, no primeiro o tempo de resposta pode variar sem comprometer as aplicações em execução, já no segundo os tempos de resposta devem estar dentro de limites rígidos, que devem ser obedecidos, caso contrário poderão ocorrer problemas irreparáveis. Quais sistemas estão sendo comentados.<br><br>",
		answers: {
			a: 'real time e batch.<br>',
			b: 'tempo compartilhado e tempo real.<br>',
			c: 'tempo compartilhado e online.<br>',
			d: 'real time e tempo real.<br>',
			e: 'tempo real e batch.<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "23- Suponha que um usuário acionou um programa que, ao ser carregado, solicitou a digitação de uma senha. Quando o programa foi acionado, o processo passou pelos estados pronto e execução. Em seguida o programa ficou no estado espera, pois dependia de uma operação de E/S (leitura do teclado) para prosseguir. Quando o usuário informar a senha o processo passará para qual estado?<br><br>",
		answers: {
			a: 'execução<br>',
			b: 'pronto<br>',
			c: 'terminado<br>',
			d: 'espera<br>',
			e: 'criado<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "24- Qual das afirmações abaixo não constitui conceito do Escalonamento Preemptivo?<br><br>",
		answers: {
			a: 'possibilidade do Sistema Operacional interromper um processo em execução.<br>',
			b: 'mudança de estado voluntariamente em função de um evento gerado pelo próprio processo.<br>',
			c: 'quando um processo está em execução nenhum evento externo pode ocasionar a perda do uso do processador<br>',
			d: 'existe um tempo limite para o processo utilizar o processador<br>',
			e: 'o controle dos recursos da máquina esta nas mãos do Sistema Operacional.<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "25- O que é THROUGHPUT de um processo num critério de escalonamento?<br><br>",
		answers: {
			a: 'é a quantidade de preempção de tempo causado no Escalonamento Circular.<br>',
			b: 'é o indicador que aponta o número de unidade de tempo para definir o Time Slice.<br>',
			c: 'é a quantidade de processos executados em um determinado intervalo de tempo.<br>',
			d: 'é o quantidade de tempo médio que um  processo CPU-Bound fica em poder do processador.<br>',
			e: 'é o mecanismo incrementa gradualmente a prioridade de processos que permanecem por muito tempo na fila de pronto.<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "26- Esta rotina é muito importante na gerência do processador, ela é responsável pela troca de contexto dos processos após o escalonador determinar qual processo deve fazer uso do processador. Qual o nome desta rotina?<br><br>",
		answers: {
			a: 'preempção<br>',
			b: 'escalonamento<br>',
			c: 'interrupção<br>',
			d: 'aging<br>',
			e: 'dispatcher<br>'
		},
		correctAnswer: 'e'
	},
	{
		question: "27- Neste escalonamento, quando um processo passa para o estado de execução, existe um tempo limite para a sua utilização de forma continua. Quando este tempo expira o processo volta ao estado de pronto, dando a vez a outro processo. Qual este tipo de escalonamento?<br><br>",
		answers: {
			a: 'SJF<br>',
			b: 'Por prioridades<br>',
			c: 'Circular<br>',
			d: 'FIFO<br>',
			e: 'Cooperativo<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "28- O que é política de escalonamento de um sistema operacional?<br><br>",
		answers: {
			a: 'uma política de escalonamento é composta por critérios não estabelecidos para determinar qual serviço em estado de pronto será escolhido para fazer uso do processador.<br>',
			b: 'uma política de escalonamento é composta por critérios estabelecidos para determinar qual processo em estado de pronto será escolhido para fazer uso da memória<br>',
			c: 'uma política de escalonamento é composta por critérios estabelecidos para determinar qual serviço em estado de pronto será escolhido para fazer uso do processador.<br>',
			d: 'uma política de escalonamento é composta por critérios pré-estabelecidos para determinar qual programa (Ex. C++, JAVA, VB) em estado de pronto será escolhido para fazer uso do processador.<br>',
			e: 'uma política de escalonamento é composta por critérios estabelecidos para determinar qual programa (Ex. C++, JAVA, VB) em estado de pronto será escolhido para fazer uso do processador.<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "29- A exclusão mútua deve afetar apenas os processos concorrentes somente quando um deles estiver fazendo acesso ao recurso compartilhado. Que nome se dá a parte do código do programa onde é feito o acesso ao recurso compartilhado?<br><br>",
		answers: {
			a: 'fragmento<br>',
			b: 'semáforo<br>',
			c: 'mapeamento<br>',
			d: 'sincronismo<br>',
			e: 'região critica<br>'
		},
		correctAnswer: 'e'
	},
	{
		question: "30- Um processo do tipo CPU-bound é aquele que faz poucas operações de entrada e saída. Por outro lado, processos do tipo I/O-bound são aqueles que fazem muita leitura de disco ou requerem muita interação com o usuário. Desta forma, concluísse que os processos que ficam a maior parte do tempo nos estados pronto e executandosão os processos do tipo:<br><br>",
		answers: {
			a: 'Não é possível classificar o processo com as informações fornecidas.<br>',
			b: 'O processo em questão não é CPU-bound nem I/O-bound.<br>',
			c: 'CPU-bound.<br>',
			d: 'CPU-bound e I/O-bound ao mesmo tempo.<br>',
			e: 'I/O-bound.<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "31- SO (sistema operacional), através do gerenciador de memória, deve tentar manter na memória principal o maior número de processos residentes, permitindo maximizar o compartilhamento do processador e demais recursos computacionais. Mesmo na ausência de espaço livre, o sistema deve permitir que novos processos sejam aceitos e executados. A técnica de swapping foi introduzida para contornar o problema de insuficiência de memória principal e consiste em:<br><br>",
		answers: {
			a: 'dividir a memória principal em pedaços de tamanho fixo, chamados partições, onde o tamanho das partições é estabelecido na fase de inicialização do sistema..<br>',
			b: 'dividir a memória em pedaços de tamanho variável, de modo que cada programa utilize apenas o espaço necessário para sua execução.<br>',
			c: 'desenvolver as aplicações de modo a não ultrapassar o espaço de endereçamento de memória disponível.<br>',
			d: 'escolher um processo residente, a ser transferido da memória principal para a memória secundária, sendo que, posteriormente, o processo é carregado de volta da memória secundária para a memória principal.<br>',
			e: 'dividir o programa em módulos, de forma que seja possível a execução independente de cada módulo, utilizando uma mesma área de memória.<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "32- Um dos tipos de gerenciamento de memória utilizados por sistemas operacionais é a memória virtual. Este tipo de memória pode ser gerenciada por segmentação. Assinale a alternativa que descreve o funcionamento do gerenciamento de memória virtual por segmentação:<br><br>",
		answers: {
			a: 'Divide o espaço do endereçamento virtual em blocos de tamanhos diferentes chamados segmentos.<br>',
			b: 'É uma técnica onde programas são divididos em segmentos de tamanhos variados cada um com seu próprio espaço de endereçamento.<br>',
			c: 'Divide o espaço de endereçamento virtual e espaço de endereçamento real em blocos do mesmo tamanho chamados de páginas.<br>',
			d: 'Divide o endereçamento memória virtual em partes semelhantes chamadas de blocos.<br>',
			e: 'Divide o espaço de endereçamento virtual e espaço de endereçamento real em blocos do mesmo tamanho chamados de buffer.<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "33- Na alocação de memória sempre acontece um problema no qual existem pedaços de memórias disponíveis porem o SO não consegue alocá-los acarretando assim o desperdício de memória. Que nome se dá a estes pedaços de memória? <br><br>",
		answers: {
			a: 'page-fault<br>',
			b: 'pagina<br>',
			c: 'partição<br>',
			d: 'fragmento<br>',
			e: 'segmento<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "34- Qual o nome da técnica, onde as memórias principal e secundária são combinadas, dando ao usuário a ilusão de existir uma memória muito maior que a capacidade real da memória principal<br><br>",
		answers: {
			a: 'memória virtual<br>',
			b: 'overlay<br>',
			c: 'paginação<br>',
			d: 'particionamento<br>',
			e: 'mapeamento<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "35- Para cada arquivo existem algumas informações como: Tamanho, Dono, Data de Criação etc. Como chamamos genericamente estas informações? <br><br>",
		answers: {
			a: 'Atributos<br>',
			b: 'Extensão<br>',
			c: 'Método de Acesso<br>',
			d: 'Organização<br>',
			e: 'Diretório<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "36- Sistemas operacionais sofisticados permitem que múltiplos programas residam na memória principal ao mesmo tempo. Nesses casos, para manter cada um dos programas livre de interferência de outros programas é necessário que o computador possua:<br><br>",
		answers: {
			a: 'memória principal com capacidade de armazenamento superior à 128 MB.<br>',
			b: 'mecanismo de gerenciamento de CPU.<br>',
			c: 'mecanismo de gerenciamento de dispositivos de E/S.<br>',
			d: 'memória cache com capacidade de armazenamento superior à 512 Bytes.<br>',
			e: 'mecanismo de gerenciamento de memória.<br>'
		},
		correctAnswer: 'e'
	},
	{
		question: "37- A partir da implantação deste conceito é possível projetar e implementar aplicações concorrentes de forma mais eficiente. O processo pode ter partes diferentes do seu código sendo executado em paralelo. A afirmação refere-se a:<br><br>",
		answers: {
			a: 'segmentação<br>',
			b: 'thread<br>',
			c: 'swapping <br>',
			d: 'mapeamento<br>',
			e: 'paginação<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "38- Se um processo que utiliza memória virtual por paginação tiver um número muito alto de falhas-de-páginas (page faults), provocando maior competição pelo espaço disponível da memória principal, será um problema denominado:<br><br>",
		answers: {
			a: 'thrashing.<br>',
			b: 'overhead.<br>',
			c: 'replacement.<br>',
			d: 'swapping.<br>',
			e: 'overlay.<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "39- Considere um sistema com swapping, no qual as seguintes partições vazias de tamanho fixo estão na memória, na ordem apresentada: 20K, 14K, 35K, 8K, 17K, 39K, 22K e 27K. Se um processo solicitar a alocação de uma área de memória de 21K, o algoritmo de alocação de memória que faz a alocação minimizando a fragmentação interna é:<br><br>",
		answers: {
			a: 'best-fit.<br>',
			b: 'worst-fit.<br>',
			c: 'last-fit.<br>',
			d: 'smart-fit.<br>',
			e: 'first-fit.<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "40- Neste tipo de gerenciamento de memória, a memória era dividida em pedaços de tamanho fixo, chamados partições. O tamanho das partições é estabelecido na fase de inicialização do sistema e era definido em função do tamanho dos programas que executariam no ambiente.<br><br>",
		answers: {
			a: 'particionada estática<br>',
			b: 'particionada dinâmica<br>',
			c: 'paginação<br>',
			d: 'contigua simples<br>',
			e: 'memória virtual<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "41- Abaixo é apresentado um trecho do arquivo de configuração do servidor Squid, apropriado para um Sistema Operacional Linux.<br><br>\n\
		...<br>\n\
		http_port 2128<br>\n\
		cache_mem 2048 MB<br>\n\
		acl all src 0.0.0.0/0.0.0.0<br>\n\
		acl redelocal src 192.168.1.0/25<br>\n\
		http_access allow redelocal<br>\n\
		http_access deny all<br>\n\
		...<br><br>",
		answers: {
			a: 'O Squid deverá atender requisições na porta 3128.<br>',
			b: 'São disponibilizados 2048 MB de memória RAM dedicada ao cache do Squid.<br>',
			c: 'A regra http_access deny all nega o acesso ao proxy para a rede 192.168.2.0/24.<br>',
			d: 'A regra http_access allow redeLocal permite acesso ao proxy para o IP 192.168.1.10 com máscara 255.255.255.128.<br>',
			e: 'A regra http_access allow redeLocal permite acesso ao proxy para o IP 192.168.1.180 com máscara 255.255.255.128.'
		},
		correctAnswer: 'e'
	},
	{
		question: "42- A respeito dos comandos que podem ser utilizados para verificar o uso de recursos em um sistema operacional Linux, assinale a alternativa que indica, respectivamente, o nome do comando responsável por exibir informações referentes ao uso da memória RAM e uso do espaço em disco<br><br>",
		answers: {
			a: 'du e free.<br>',
			b: 'free e du.<br>',
			c: 'locate e df.<br>',
			d: 'free e df.<br>',
			e: 'cat e df<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "43-  As permissões de acesso protegem o sistema de arquivos do Linux do acesso indevido de pessoas ou programas não autorizados. A sequência correta para proteger arquivos e diretórios é:<br><br>",
		answers: {
			a: 'leitura, escrita e execução (r,w,x).<br>',
			b: 'execução, leitura e escrita (x,r,w).<br>',
			c: 'execução, escrita e leitura(x,w, r).<br>',
			d: 'escrita, execução e leitura (w, x, r).<br>',
			e: 'leitura, execução e escrita (r, x, w)<br>.'
		},
		correctAnswer: 'a'
	},
	{
		question: "44- Assinale a alternativa que descreve o resultado da execução do seguinte comando em um ambiente Linux:<br><br>cp /home/ocorrencias.txt /home/backup <br><br>Considere que a pasta /home/backup está vazia, e que as permissões de acesso e o espaço em disco são suficientes para a ação. <br><br>",
		answers: {
			a: 'O arquivo ocorrencias.txt será renomeado para backup.<br>',
			b: 'O arquivo ocorrencias.txt será apagado da pasta /home e enviado para a pasta /home/backup.<br>',
			c: 'Uma cópia do arquivo ocorrencias.txt será enviada para a pasta /home/backup.<br>',
			d: 'O arquivo ocorrencias.txt será movido para a pasta /home, apenas.<br>',
			e: 'Ocorrerá um erro de permissão na pasta backup.'
		},
		correctAnswer: 'c'
	},
	{
		question: "45- Assinale a opção que apresenta o comando que um usuário deve utilizar, no ambiente Linux, para visualizar, em um arquivo de texto (nome-arquivo), apenas as linhas que contenham determinada palavra (nome-palavra).<br><br>",
		answers: {
			a: 'cat nome-arquivo | grep nome-palavra<br>',
			b: 'show nome-arquivo | grep nome-palavra<br>',
			c: 'nano nome-arquivo | grep nome-palavra<br>',
			d: 'cat nome-arquivo | more nome-palavra<br>',
			e: 'nano nome-arquivo | more nome-palavra<br>'
		},
		correctAnswer: 'a'
	},
		{
		question: "46- Assinale o diretório do Linux que contém a maioria dos arquivos de configuração do sistema assim como configurações de rede, de usuários do sistema e suas permissões:<br><br>",
		answers: {
			a: '/var<br>',
			b: '/mnt<br>',
			c: '/bin<br>',
			d: '/etc<br>',
			e: '/conf'
		},
		correctAnswer: 'd'
	},
	{
		question: "47- Com base no funcionamento padrão de um sistema operacional GNU/Linux, analise as afirmações abaixo e em seguida marque a alternativa que representa cada um dos comandos descritos respectivamente.<br><br>\n\
I. Mostra as configurações de todos os adaptadores de rede ativos na máquina e também pode ser utilizado para realizar configurações voláteis para os adaptadores de rede.<br>\n\
II. Utilizado para fazer download de arquivos ou diretórios em modo texto. Suporta os protocolos HTTP e FTP.<br>\n\
III. Apresenta os dados completos sobre domínios e blocos IP na Internet, auxiliando nas pesquisas sobre redes ou entidades.<br>\n\
IV. Cria arquivos simples ou cadeia de arquivos no sistema Linux:<br><br>",
		answers: {
			a: 'ipconfig, wget, whois, touch<br>',
			b: 'ifconfig, wget, whois, touch.<br>',
			c: 'ping, whois, killall, touch.<br>',
			d: 'ifdown, wget, ls, touch.<br>',
			e: 'ifconfig, wget, ls, mkdir.'
		},
		correctAnswer: 'b'
	},
	{
		question: "48- Conforme visto e aplicado em laboratório, foi implementado um Servidor FTP no Windows Server, acessando os arquivos em um compartilhamento Linux com o Samba, segue abaixo a configuração usada nos compartilhamentos do Samba:<br><br>\n\
...<br>\n\
;   write list = root, @lpadmin<br>\n\
[FTP]<br>\n\
  comment = FTP Anonimo<br>\n\
  path = /var/ftp<br>\n\
  browseable = yes<br>\n\
[FTP2]<br>\n\
  comment = FTP2<br>\n\
  path = var/ftp2<br>\n\
  browseable = yes<br><br>\n\
 Para que a autenticação e todo o controle de acesso seja feita pelo Servidor FTP Windows Server, precisamos configurar algumas linhas no samba. Especificamente 3, são elas:<br><br>",
		answers: {
			a: 'security = share<br>map to guest = bad user<br>guest ok = yes<br><br> ',
			b: 'security = bad user <br>map to guest = user<br> guest ok = no<br><br>',
			c: 'security = user<br> map to guest = user<br> guest ok = no<br><br>',
			d: 'security = user<br> map to guest = bad user<br> guest ok = yes<br><br> ',
			e: 'security = user<br> map to guest = share<br> guest ok = no<br><br>'
		},
		correctAnswer: 'd'
	},
		{
		question: "49- Na estrutura de diretórios do sistema operacional Linux, os diretórios /var e /dev são destinados, respectivamente, a:<br><br>",
		answers: {
			a: 'Processos que estejam sendo executados; e arquivos de dispositivos.<br>',
			b: 'Arquivos temporários; e arquivos de dispositivos.<br>',
			c: 'Arquivos de dispositivos e execução de programas em segundo plano.<br>',
			d: 'Arquivos variáveis, ou seja, passíveis de mudanças, como arquivos de logs do sistema; e arquivos referentes à dispositivos do hardware<br>',
			e: 'Arquivos variáveis, ou seja, passíveis de mudanças, como arquivos de logs do sistema; e arquivos de configurações específicas de programas.<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "50- No GNU/Linux, os dispositivos existentes em seu computador são identificados por um arquivo referente a este dispositivo no diretório /dev. Qual a descrição correta para a identificação a seguir?<br><br>\n\
		/dev/sda1<br><br>",
		answers: {
			a: 'Primeira partição do primeiro disco rígido IDE.<br>',
			b: 'Primeiro CD-ROM SCSI.<br>',
			c: 'Primeira partição do primeiro disco rígido SCSI ou SATA.<br>',
			d: 'Primeiro disco rígido na primeira controladora IDE.<br>',
			e: 'Segundo disco rígido na primeira controladora SCSI ou SATA.<br>'
		},
		correctAnswer: 'c'
	},
	{
		question: "51- No LINUX cada dispositivo é reconhecido por um nome, compondo assim a estrutura de diretórios do sistema. Qual o nome com que o LINUX atribui a unidade de disco master da primeira controladora IDE?<br><br>",
		answers: {
			a: 'sdb<br>.',
			b: 'fd0.<br>',
			c: 'hdd.<br>',
			d: 'hda.<br>',
			e: 'sda.<br>'
		},
		correctAnswer: 'd'
	},
		{
		question: "52- No Linux e no prompt de comandos do Windows, para mostrar a lista de arquivos e diretórios presentes na unidade de armazenamento atual, por exemplo, um pen drive, utilizam-se, respectivamente, os comandos<br><br>",
		answers: {
			a: 'ls e list<br>',
			b: 'ls e dir<br>',
			c: 'cat e dir.<br>',
			d: 'pstree e dir<br>',
			e: 'ls e files<br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "53- O Samba é um software servidor para Linux (e outros sistemas baseados em Unix) que permite o gerenciamento e compartilhamento de recursos em redes formadas por computadores com o Windows. <br>Com base na configuração abaixo, assinale a alternativa que identifique a função da linha (create mask = 0700)<br><br>\n\
		[public]<br>\n\
		comment = Diretório Publico<br>\n\
		browseable = noread only = yes<br>\n\
		create mask = 0700<br>\n\
		directory mask = 0700<br>\n\
		valid users = %$<br>\n\
		writable = yes<br><br>",
		answers: {
			a: 'Permite que seja criado diretórios na pasta compartilhada onde somente o dono poderá criar.<br>',
			b: 'Permite que seja criado arquivos na pasta compartilhada onde qualquer usuário ou grupo  poderá criar.<br>',
			c: 'Permite que seja criado arquivos na pasta compartilhada onde somente o dono poderá criar.<br>',
			d: 'Permite que seja criado diretorios na pasta compartilhada onde qualquer usuário ou grupo  poderá criar.<br>',
			e: 'Habilita a opção de somente leitura para qualquer usuário.<br> '
		},
		correctAnswer: 'c'
	},
	{
		question: "54- Para conhecer a finalidade de um comando no Linux, um Técnico precisará digitar um primeiro comando seguido do nome do comando que deseja conhecer. O primeiro comando que terá que utilizar, nesse caso, é o:<br><br>",
		answers: {
			a: 'command<br>',
			b: 'help<br>',
			c: 'show<br>',
			d: 'man<br>',
			e: 'bash<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "55- Para diagnosticar problemas de conectividade em redes de computadores, alguns comandos podem ser utilizados em ambiente Linux. A propósito desse assunto, assinale a alternativa que apresenta esses comandos.<br><br>",
		answers: {
			a: 'ipconfig e ping<br>',
			b: 'kill e ping<br>',
			c: 'ipup e ipdown<br>',
			d: 'man e ifconfig<br>',
			e: 'ifconfig e ping<br>'
		},
		correctAnswer: 'e'
	},
	{
		question: "56-  Qual comando LINUX atribui todas as permissões para o dono, ou seja, ele pode ler, escrever e executar o arquivo; atribui ao grupo permissão para apenas ler e executar o arquivo e atribui aos outros somente permissão para executá-lo?<br><br>",
		answers: {
			a: 'chmod 0751 /home/aluno1/arquivo.txt<br>',
			b: 'chmod 0771 /home/aluno1/arquivo.txt<br>',
			c: 'chmod 0755 /home/aluno1/arquivo.txt<br>',
			d: 'chmod 0766 /home/aluno1/arquivo.txt<br>',
			e: 'chmod 0157 /home/aluno1/arquivo.txt<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "57-  Qual programa do sistema operacional LINUX executa tarefas de modo automático por usuário, em horários pré-determinados?<br><br>",
		answers: {
			a: 'Crontab<br>',
			b: 'Schedule<br>',
			c: 'Anacron<br>',
			d: 'Cron<br>',
			e: 'Fcron<br>'
		},
		correctAnswer: 'a'
	},
		{
		question: "58- Um administrador de redes precisa adicionar uma regra no seu servidor Proxy com Squid. Trata-se de um bloqueio de sites. O primeiro passo seria a criação de uma acl para executar a ação. Qual das alternativas abaixo contém a configuração que ele deveria criar? <br>(Partindo do ponto em que os sites a serem bloqueados estão contidos no arquivo block_sites.acl)<br><br>",
		answers: {
			a: 'acl negar_sites urlpath_regex -i "/etc/squid/block_sites.acl"<br>',
			b: 'acl negar_sites url_regex  /etc/squid/block_sites.acl<br>',
			c: 'acl negar_sites no_url_regex -a /etc/squid/block_sites.acl<br>',
			d: 'acl negar_sites url_regex -i "/etc/squid/block_sites.acl"<br>',
			e: 'acl negar_sites drop_url -a "/etc/squid/block_sites.acl"<br>'
		},
		correctAnswer: 'd'
	},
	{
		question: "59- Um Analista digitou o comando chmod u=rwx,g=rx,o=r processo para definir as permissões de acesso ao arquivo processo. O comando equivalente usando a notação octal é:<br><br>",
		answers: {
			a: 'chmod 754 processo<br>',
			b: 'chmod 671 processo<br>',
			c: 'chmod 713 processo<br>',
			d: 'chmod 777 processo<br>',
			e: 'chmod 734 processo<br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "60- Um Analista recebeu um arquivo chamado funcionarios.txt contendo o nome e outras informações de cerca de 10 000 funcionários. Ao ser solicitado a localizar os dados do funcionário Marconi Teixeira nesse arquivo, estando na pasta em que se encontra o arquivo em um terminal Linux, digitou o comando:<br><br>",
		answers: {
			a: 'locate "Marconi Teixeira" >> funcionarios.txt<br> ',
			b: 'grep | "Marconi Teixeira" >> funcionarios.txt<br> ',
			c: 'search "Marconi Teixeira" funcionarios.txt<br> ',
			d: 'ls "Marconi Teixeira" in funcionarios.txt<br> ',
			e: 'grep "Marconi Teixeira" funcionarios.txt<br> '
		},
		correctAnswer: 'e'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
		var output = [];
		var answers; 

		
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			
			for(letter in questions[i].answers){

				
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		var score = 0.1666666666666667;
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length + ' <br>Sua nota foi: ' + numCorrect * score;
		}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
