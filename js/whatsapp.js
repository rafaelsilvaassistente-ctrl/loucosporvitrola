/**
 * LOUCOS POR VITROLA - Módulo de Integração WhatsApp
 * Gerador de links parametrizados e conversas diretas com a equipe de atendimento
 */

const WHATSAPP_NUMERO = '5511996176660';

function abrirWhatsAppDireto(tipo = 'geral', contexto = '') {
  let texto = '';

  switch (tipo) {
    case 'restauracao':
      texto = 'Olá, equipe Loucos por Vitrola! Gostaria de solicitar um orçamento para restauração do meu equipamento vintage. Podemos conversar?';
      break;
    case 'manutencao':
      texto = 'Olá! Preciso de manutenção preventiva/corretiva no meu toca-discos. Gostaria de entender como funciona a avaliação na oficina de vocês.';
      break;
    case 'vendas':
      texto = 'Olá! Vi o catálogo no site e gostaria de saber mais sobre os equipamentos vintage à venda e opções de envio.';
      break;
    case 'produto':
      texto = `Olá! Tenho interesse no equipamento "${contexto}". Ele ainda está disponível para pronta entrega?`;
      break;
    case 'avaliacao':
      texto = 'Olá! Tenho um equipamento vintage guardado e gostaria de saber se vocês compram ou aceitam como parte de pagamento.';
      break;
    case 'contato':
      texto = 'Olá! Visitei o site Loucos por Vitrola e gostaria de tirar uma dúvida sobre os serviços de vocês.';
      break;
    default:
      texto = 'Olá, Loucos por Vitrola! Gostaria de saber mais sobre o trabalho de restauração, manutenção e venda de toca-discos.';
  }

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}
