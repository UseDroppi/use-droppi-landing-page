import type { ReactNode } from 'react'
import { Logo } from '../brand/Logo'
import { Footer } from './Home'

const P = ({ children }: { children: ReactNode }) => <mark>{children}</mark>

function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <header className="nav nav-legal">
        <a href="/" className="nav-logo"><Logo variant="wordmark" label="Droppi" /></a>
        <a href="/" className="nav-cta">Voltar ao site</a>
      </header>
      <main className="legal">
        <p className="legal-draft">Rascunho: este texto ainda passa por revisão jurídica. Os trechos destacados precisam ser preenchidos.</p>
        <h1>{title}</h1>
        <p className="legal-updated">Última atualização: {updated}</p>
        {children}
      </main>
      <Footer />
    </>
  )
}

export function Privacy() {
  return (
    <LegalLayout title="Política de Privacidade" updated="15 de novembro de 2026">
      <p>
        Esta política explica quais dados pessoais a Droppi coleta quando você usa o aplicativo e este site, por que
        coletamos, com quem compartilhamos e como você exerce seus direitos, conforme a Lei Geral de Proteção de Dados
        (Lei nº 13.709/2018, LGPD).
      </p>

      <h2>1. Quem é o controlador</h2>
      <p>
        O controlador dos dados é <P>[razão social]</P>, inscrita no CNPJ sob o nº <P>[CNPJ]</P>, com sede em{' '}
        <P>[endereço]</P> (“Droppi”). Contato do encarregado (DPO): <P>[e-mail de privacidade]</P>.
      </p>

      <h2>2. Dados que coletamos</h2>
      <ul>
        <li><strong>Cadastro:</strong> nome, e-mail, nome de usuário (@) e senha (armazenada de forma criptografada).</li>
        <li><strong>Perfil:</strong> foto, biografia e demais informações que você decidir adicionar.</li>
        <li><strong>Conteúdo:</strong> posts, fotos, vídeos, legendas, comentários e curtidas.</li>
        <li><strong>Conexões:</strong> as pessoas que você dropa (segue) e que dropam você.</li>
        <li><strong>Mensagens:</strong> o conteúdo das conversas pelo chat do aplicativo.</li>
        <li><strong>Conta empresarial:</strong> nome da empresa ou profissional, descrição e categorias de serviço.</li>
        <li><strong>Dados técnicos:</strong> modelo do aparelho, sistema operacional, versão do app, endereço IP e registros de acesso.</li>
      </ul>
      <p>
        A Droppi não pede dados de saúde, como diagnósticos, exames ou medidas corporais. Se você decidir publicar esse
        tipo de informação, ela fica visível conforme as configurações do seu perfil.
      </p>

      <h2>3. Para que usamos os dados</h2>
      <ul>
        <li>Criar e manter sua conta e autenticar seu acesso (execução de contrato).</li>
        <li>Exibir seu perfil e conteúdo para a comunidade, montar o feed, as sugestões e o ranking (execução de contrato).</li>
        <li>Permitir o contato entre usuários e prestadores de serviço pelo chat (execução de contrato).</li>
        <li>Enviar e-mails de confirmação, recuperação de senha e avisos sobre a conta (execução de contrato).</li>
        <li>Prevenir fraude, abuso e garantir a segurança da plataforma (legítimo interesse).</li>
        <li>Cumprir obrigações legais, como a guarda de registros de acesso exigida pelo Marco Civil da Internet (obrigação legal).</li>
      </ul>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Não vendemos seus dados. Compartilhamos apenas com fornecedores que operam a plataforma em nosso nome, como
        hospedagem, banco de dados e armazenamento de arquivos (Supabase), envio de e-mails transacionais (
        <P>[provedor de e-mail]</P>) e as lojas de aplicativos (Google e Apple). Também podemos compartilhar dados quando
        exigido por lei ou ordem judicial.
      </p>
      <p>
        Alguns desses fornecedores podem armazenar dados fora do Brasil. Nesses casos, a transferência segue as hipóteses
        previstas no art. 33 da LGPD.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Mantemos seus dados enquanto sua conta estiver ativa. Ao excluir a conta, apagamos ou anonimizamos os dados em até{' '}
        <P>[prazo, ex.: 30 dias]</P>, exceto o que precisamos guardar por obrigação legal, como registros de acesso por 6
        meses.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        Você pode, a qualquer momento, pedir confirmação de tratamento, acesso, correção, anonimização, portabilidade,
        eliminação dos dados, informação sobre compartilhamento e revogação de consentimento (art. 18 da LGPD). Envie seu
        pedido para <P>[e-mail de privacidade]</P>. Você também pode editar seu perfil e excluir sua conta pelo próprio
        aplicativo.
      </p>

      <h2>7. Idade mínima</h2>
      <p>
        A Droppi é destinada a pessoas com <P>[idade mínima, ex.: 18 anos]</P> ou mais. Se soubermos que coletamos dados
        de alguém abaixo dessa idade, excluiremos a conta.
      </p>

      <h2>8. Segurança</h2>
      <p>
        Usamos conexão criptografada, controle de acesso por usuário no banco de dados e senhas armazenadas com hash.
        Nenhum sistema é totalmente imune a incidentes; se algo acontecer, avisaremos você e a ANPD conforme a lei.
      </p>

      <h2>9. Mudanças nesta política</h2>
      <p>
        Podemos atualizar esta política. Quando a mudança for relevante, avisaremos pelo aplicativo ou por e-mail antes de
        ela entrar em vigor.
      </p>
    </LegalLayout>
  )
}

export function Terms() {
  return (
    <LegalLayout title="Termos de Uso" updated="15 de novembro de 2026">
      <p>
        Estes termos regem o uso do aplicativo e do site da Droppi, oferecidos por <P>[razão social]</P>, CNPJ{' '}
        <P>[CNPJ]</P>. Ao criar uma conta, você concorda com eles e com a nossa{' '}
        <a href="/privacidade">Política de Privacidade</a>.
      </p>

      <h2>1. Sua conta</h2>
      <p>
        Você precisa ter <P>[idade mínima]</P> ou mais e informar dados verdadeiros. A conta é pessoal: você é responsável
        por manter a senha em sigilo e por tudo o que for feito com ela.
      </p>

      <h2>2. Convivência na comunidade</h2>
      <p>A Droppi é feita pra incentivar, não pra comparar. Não é permitido:</p>
      <ul>
        <li>assediar, humilhar ou discriminar outras pessoas, inclusive por aparência ou corpo;</li>
        <li>publicar conteúdo ilegal, violento, sexual ou que viole direitos de terceiros;</li>
        <li>vender ou promover substâncias proibidas, anabolizantes sem prescrição ou “curas milagrosas”;</li>
        <li>criar perfis falsos, fazer spam ou tentar burlar a segurança da plataforma.</li>
      </ul>
      <p>Podemos remover conteúdo e suspender contas que descumpram estas regras.</p>

      <h2>3. Seu conteúdo</h2>
      <p>
        O que você publica continua sendo seu. Ao publicar, você nos dá uma licença gratuita e não exclusiva pra exibir,
        armazenar e distribuir esse conteúdo dentro da Droppi enquanto ele estiver no ar. Você garante que tem os direitos
        sobre o que publica.
      </p>

      <h2>4. Saúde e prestadores de serviço</h2>
      <p>
        A Droppi não presta serviços médicos, nutricionais ou de educação física. O conteúdo da comunidade não substitui
        orientação profissional. Prestadores que usam a conta empresarial são independentes e responsáveis pelos serviços
        que oferecem, por suas habilitações e registros profissionais e pelo que combinam com você.
      </p>

      <h2>5. Drops</h2>
      <p>
        O saldo de drops exibido no app é uma métrica de participação na comunidade. Ele não tem valor monetário, não pode
        ser vendido, transferido ou trocado por dinheiro, e as regras podem mudar.
      </p>

      <h2>6. Disponibilidade</h2>
      <p>
        Trabalhamos pra manter a Droppi no ar, mas o serviço pode passar por instabilidades, manutenções e mudanças de
        funcionalidade. Na medida permitida por lei, não respondemos por danos indiretos decorrentes do uso do app.
      </p>

      <h2>7. Encerramento</h2>
      <p>
        Você pode excluir sua conta a qualquer momento pelo aplicativo. Podemos encerrar contas que violem estes termos,
        com aviso sempre que possível.
      </p>

      <h2>8. Mudanças e foro</h2>
      <p>
        Podemos atualizar estes termos e avisaremos sobre mudanças relevantes. Fica eleito o foro da comarca de{' '}
        <P>[cidade/UF]</P>, sem prejuízo do foro do domicílio do consumidor. Dúvidas: <P>[e-mail de contato]</P>.
      </p>
    </LegalLayout>
  )
}
