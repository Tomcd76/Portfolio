import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Evidence {
  label: string;
  url?: string;
  type?: 'document' | 'image' | 'link';
}

export interface Project {
  id: string;
  title: string;
  type: 'formation' | 'stage' | 'alternance' | 'scolaire';
  objectives: string;
  context?: string;
  description?: string;
  tools?: string[];
  steps?: string; // <--- C'est ici qu'on mettra le HTML de la description détaillée
  difficulties?: string;
  results?: string;
  analysis?: string;
  evidence?: Evidence[];
  skills?: string[]; 
}

export interface SkillBlock {
  id: string;
  title: string;
  skills: { id: string; label: string }[];
}


export const SKILL_BLOCKS: SkillBlock[] = [
  {
    id: "patrimoine",
    title: "Gérer le patrimoine informatique",
    skills: [
      { id: "recenser", label: "Recenser et identifier les ressources numériques" },
      { id: "exploiter", label: "Exploiter des référentiels, normes et standards" },
      { id: "habilitation", label: "Mettre en place et vérifier les niveaux d'habilitation" },
      { id: "continuite", label: "Vérifier les conditions de la continuité d'un service" },
      { id: "sauvegardes", label: "Gérer des sauvegardes" },
      { id: "regles", label: "Vérifier le respect des règles d'utilisation" },
    ]
  },
  {
    id: "incidents",
    title: "Répondre aux incidents et aux demandes d'assistance",
    skills: [
      { id: "collecter", label: "Collecter, suivre et orienter des demandes" },
      { id: "traiter_res", label: "Traiter des demandes concernant les services réseau et système" },
      { id: "traiter_app", label: "Traiter des demandes concernant les applications" },
    ]
  },
  {
    id: "presence",
    title: "Développer la présence en ligne de l'organisation",
    skills: [
      { id: "valorisation", label: "Participer à la valorisation de l'image sur les médias numériques" },
      { id: "referencement", label: "Référencer les services en ligne et mesurer leur visibilité" },
      { id: "evolution_web", label: "Participer à l'évolution d'un site Web" },
    ]
  },
  {
    id: "projet",
    title: "Travailler en mode projet",
    skills: [
      { id: "analyser", label: "Analyser les objectifs et les modalités d'organisation" },
      { id: "planifier", label: "Planifier les activités" },
      { id: "evaluer", label: "Évaluer les indicateurs de suivi et analyser les écarts" },
    ]
  },
  {
    id: "service",
    title: "Mettre à disposition des utilisateurs un service informatique",
    skills: [
      { id: "tests", label: "Réaliser les tests d'intégration et d'acceptation" },
      { id: "deployer", label: "Déployer un service" },
      { id: "accompagner", label: "Accompagner les utilisateurs" },
    ]
  },
  {
    id: "dev_pro",
    title: "Organiser son développement professionnel",
    skills: [
      { id: "env_app", label: "Mettre en place son environnement d'apprentissage personnel" },
      { id: "veille", label: "Mettre en œuvre des outils et stratégies de veille" },
      { id: "identite", label: "Gérer son identité professionnelle" },
      { id: "projet_pro", label: "Développer son projet professionnel" },
    ]
  }
];
// --- COLLE LA FONCTION ICI ---
const zoomWrapper = (imgHtml: string) => `
  <div class="relative group cursor-zoom-in rounded-2xl overflow-hidden border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 my-12 mx-auto">
    <div class="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
      <div class="bg-zinc-950/80 p-4 rounded-full text-indigo-300 backdrop-blur-sm flex items-center gap-3 border border-indigo-500/20">
        <span class="text-lg font-bold">Agrandir</span>
      </div>
    </div>
    ${imgHtml}
  </div>
`;

export const MOCK_PROJECTS: Project[] = [
  // --- FORMATION ---
{
    id: "form_ad_gpo",
    title: "Installation AD, GPO et Partages",
    type: "formation",
    context: "TP réalisé au Lycée Lamartine.",
    objectives: "Mettre en place un domaine Active Directory, gérer les utilisateurs et sécuriser les partages via des GPO.",
    description: "Dans le cadre de ce TP, nous avons déployé un environnement Windows Server 2019 complet.\nL'objectif était de centraliser l'authentification des utilisateurs, de structurer l'organisation via des Unités Organisationnelles (OU), de sécuriser l'accès aux données de l'entreprise et d'automatiser la configuration des postes de travail via des GPO.\nWindows Server 2019 reste une solution extrêmement stable et largement utilisée en entreprise pour ces rôles critiques.",
    tools: ["Windows Server", "Active Directory", "GPO", "NTFS", "PowerShell"],
    difficulties: "Problème de fonctionnement des GPO sur les postes clients. Résolu en forçant la mise à jour avec `gpupdate /force` et en vérifiant le DNS.",

    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Prérequis et configuration IP</h2>
        <p>Avant toute installation, la rigueur est de mise. Un contrôleur de domaine ne doit jamais être en DHCP.</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Nom de la machine :</strong> Identifiez clairement votre serveur (ex : SRV-AD-01).</li>
          <li><strong>Adresse IP :</strong> Configurez une IP fixe (ex : 192.168.1.100 /24).</li>
          <li><strong>DNS :</strong> Pour le moment, laissez le DNS vide ou pointez sur 127.0.0.1 (le rôle DNS s'installera avec l'AD).</li>
        </ul>
        <img src="/Capt-List/image77.png" alt="Configuration IP Statique" />

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-16">II. Installation du rôle AD DS et Promotion</h2>
        
        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation via le Gestionnaire de serveur</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Allez dans le <strong>Gestionnaire de serveur</strong> > <strong>Gérer</strong> > <strong>Ajouter des rôles et fonctionnalités</strong>.</li>
          <li>Sélectionnez <strong>Installation basée sur un rôle ou une fonctionnalité</strong>.</li>
          <li>Cochez le rôle <strong>Services AD DS</strong> (Active Directory Domain Services).</li>
          <li>Acceptez l'ajout des outils de gestion (RSAT) et lancez l'installation.</li>
        </ol>
        <img src="/Capt-List/image78.png" alt="Installation rôle AD DS" />

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Promotion du serveur</h3>
        <p>Une fois l'installation terminée :</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Cliquez sur l'icône de notification et choisissez <strong>Promouvoir ce serveur en contrôleur de domaine</strong>.</li>
          <li>Sélectionnez <strong>Ajouter une nouvelle forêt</strong> et nommez votre domaine (ex : labo-it.local).</li>
          <li>Définissez le <strong>Mot de passe de restauration des services d'annuaire (DSRM)</strong>. Conservez-le précieusement.</li>
          <li>Poursuivez les étapes en laissant les options par défaut (DNS, NetBIOS, Chemins).</li>
          <li>Après le test des prérequis, cliquez sur <strong>Installer</strong>. Le serveur va redémarrer.</li>
        </ol>
        <img src="/Capt-List/image79.png" alt="Promotion Contrôleur de Domaine" />

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-16">III. Structuration de l'Annuaire (OU, Groupes et Utilisateurs)</h2>
        <p>Nous organisons le domaine via la console <strong>Utilisateurs et ordinateurs Active Directory</strong>.</p>
        
        <h3 id="section-3a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Création des Unités Organisationnelles (OU)</h3>
        <p>Il est fortement déconseillé d'utiliser les conteneurs par défaut. Créez une structure logique :</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Faites un clic droit sur le domaine > <strong>Nouveau</strong> > <strong>Unité d'organisation</strong>.</li>
          <li>Structure type : Société > Services > (RH, Technique, Commercial).</li>
          <li>Créez également une OU <strong>Groupes</strong> pour centraliser vos groupes de sécurité.</li>
        </ul>
        <img src="/Capt-List/image80.png" alt="Structure des OU" />

        <h3 id="section-3b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Création manuelle des Groupes de sécurité</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Dans l'OU Groupes, faites un clic droit > <strong>Nouveau</strong> > <strong>Groupe</strong>.</li>
          <li>Exemple : <strong>G_RH_Modif</strong> (Type : Sécurité / Étendue : Globale).</li>
        </ol>
        <img src="/Capt-List/image81.png" alt="Création Groupes" />

        <h3 id="section-3c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Création manuelle des Utilisateurs</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Allez dans l'OU de votre choix (ex : RH).</li>
          <li>Faites un clic droit > <strong>Nouveau</strong> > <strong>Utilisateur</strong>.</li>
          <li>Saisissez le nom, prénom et le login (ex : j.dupont).</li>
          <li>Définissez un mot de passe et cochez <strong>"L'utilisateur doit changer le mot de passe à la prochaine ouverture de session"</strong>.</li>
          <li>Une fois l'utilisateur créé, ajoutez-le au groupe <strong>G_RH_Modif</strong>.</li>
        </ol>
        <img src="/Capt-List/image82.png" alt="Création Utilisateurs" />

        <h2 id="section-4" class="text-4xl font-bold text-white mb-6 mt-16">IV. Configuration du Serveur de Fichiers (NTFS et Partages)</h2>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li><strong>Préparation :</strong> Créez un dossier sur votre disque de données (ex : D:\\Partages\\RH).</li>
          <li><strong>Partage :</strong> Partagez le dossier sous le nom <strong>RH$</strong> (invisible). Dans les autorisations de partage, mettez "Tout le monde" en "Contrôle total".</li>
          <li><strong>Sécurité NTFS :</strong> 
            <ul class="list-disc pl-6 mt-2">
              <li>Allez dans l'onglet <strong>Sécurité</strong> > <strong>Avancé</strong>.</li>
              <li><strong>Désactivez l'héritage</strong> et supprimez les droits inutiles.</li>
              <li>Ajoutez votre groupe <strong>G_RH_Modif</strong> avec les droits <strong>Modification</strong>.</li>
            </ul>
          </li>
        </ol>
        <img src="/Capt-List/image83.png" alt="Permissions NTFS" />

        <h2 id="section-5" class="text-4xl font-bold text-white mb-6 mt-16">V. Déploiement des stratégies de groupe (GPO)</h2>
        
        <h3 id="section-5a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Restriction du Panneau de Configuration</h3>
        <p>Activez <strong>Interdire l'accès au Panneau de configuration et aux paramètres du PC</strong> dans les Modèles d'administration et liez la GPO à votre OU Société.</p>
        <img src="/Capt-List/image84.png" alt="GPO Restriction" />

        <h3 id="section-5b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Mappage automatique du lecteur réseau</h3>
        <p>Configurez un nouveau lecteur mappé dans les Préférences : Action <strong>Mettre à jour</strong>, Emplacement <strong>\\\\SRV-AD-01\\RH$</strong>, Lettre <strong>R:</strong>.</p>
        <img src="/Capt-List/image70.png" alt="GPO Mappage" />

        <h2 id="section-6" class="text-4xl font-bold text-white mb-6 mt-16">VI. Validation et Tests côté Client</h2>
        
        <h3 id="section-6a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Préparation et Jointure</h3>
        <p>Fixez le <strong>DNS primaire</strong> du client sur l'IP du serveur (192.168.1.100). Testez avec <code>ping labo-it.local</code>.</p>
        <p class="bg-zinc-900 p-4 border-l-4 border-indigo-500 text-xl italic mb-6">
          <strong>* Note technique :</strong> En cas d'échec de résolution, purgez le cache DNS local via la commande : <code>ipconfig /flushdns</code>.
        </p>
        <img src="/Capt-List/image71.png" alt="Test Résolution DNS" />
        <p>Joignez le domaine via les paramètres système avancés. Un message de bienvenue doit apparaître.</p>
        <img src="/Capt-List/image72.png" alt="Message Jointure Domaine" />

        <h3 id="section-6b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Vérification des GPO et Droits</h3>
        <ol class="list-decimal pl-6 space-y-4 mb-6">
          <li><strong>Le lecteur réseau :</strong> Le lecteur <strong>R:</strong> doit être présent automatiquement.
            <br/><img src="/Capt-List/image73.png" alt="Vérification Lecteur R" class="mt-2" />
          </li>
          <li><strong>Restriction Panneau de configuration :</strong> L'accès doit être refusé par un message d'erreur.
            <br/><img src="/Capt-List/image74.png" alt="Erreur Restriction" class="mt-2" />
          </li>
          <li><strong>Diagnostic :</strong> Lancez <code>gpresult /r</code> pour lister les GPO appliquées.
            <br/><img src="/Capt-List/image75.png" alt="Résultat gpresult" class="mt-2" />
          </li>
          <li><strong>Test NTFS :</strong> La création de fichier doit être possible pour les membres de <strong>G_RH_Modif</strong> et refusée pour les autres.
            <br/><img src="/Capt-List/image76.png" alt="Test Écriture NTFS" class="mt-2" />
          </li>
        </ol>
      </div>
    `,
    results: "Domaine fonctionnel. Les utilisateurs se connectent avec leurs identifiants et ont accès uniquement à leurs dossiers métiers.",
    analysis: "J'ai compris l'importance de bien structurer son AD dès le départ pour faciliter l'application des stratégies de groupe.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Mettre en place un domaine Active Directory, gérer les utilisateurs et sécuriser les partages via des GPO.pdf" }],
    skills: ["habilitation", "regles", "deployer"]
  },
{
    id: "form_raid_veeam",
    title: "Redondance RAID et Sauvegardes",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Assurer la haute disponibilité des données et mettre en place un plan de sauvegarde.",
    description: "L'objectif de ce TP est de mettre en place une stratégie de protection des données robuste. Nous utilisons un serveur Linux (SRV-RAID) pour créer un espace de stockage redondant grâce au RAID 5 (tolérance à la panne d'un disque). Cet espace servira ensuite de cible de sauvegarde (Repository) pour le logiciel Veeam Backup & Replication installé sur un serveur Windows Server 2019 (SRV-VEEAM).",
    tools: ["Windows Server", "Linux", "VirtualBox", "RAID 5", "Veeam"],
    difficulties: "Stockage insuffisant pour l'installation de Veeam. Un allongement du stockage a été nécessaire sur la VM VirtualBox.",
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Architecture et Plan d'adressage</h2>
        <div class="overflow-x-auto my-6">
          <table class="w-full border-collapse border border-zinc-800 text-lg">
            <thead>
              <tr class="bg-zinc-900">
                <th class="border border-zinc-800 p-3">Machine</th>
                <th class="border border-zinc-800 p-3">OS</th>
                <th class="border border-zinc-800 p-3">IP Statique</th>
                <th class="border border-zinc-800 p-3">Rôle</th>
                <th class="border border-zinc-800 p-3">Stockage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-zinc-800 p-3"><strong>SRV-RAID</strong></td>
                <td class="border border-zinc-800 p-3">Debian 12</td>
                <td class="border border-zinc-800 p-3">192.168.1.101</td>
                <td class="border border-zinc-800 p-3">Stockage RAID</td>
                <td class="border border-zinc-800 p-3">1x20G (OS) + 3x10G (RAID 5)</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-3"><strong>SRV-VEEAM</strong></td>
                <td class="border border-zinc-800 p-3">Win Server 2019</td>
                <td class="border border-zinc-800 p-3">192.168.1.102</td>
                <td class="border border-zinc-800 p-3">Sauvegarde</td>
                <td class="border border-zinc-800 p-3">1x40G</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Configuration matérielle SRV-RAID :</strong></p>
        <ul class="list-disc pl-6 mb-6">
          <li>1 disque système (20 Go) sur /dev/sda.</li>
          <li>3 disques de données (10 Go chacun) identifiés comme /dev/sdb, /dev/sdc et /dev/sdd.</li>
        </ul>
        <img src="/Capt-List/image85.png" alt="Disques matériels" />

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-16">II. Configuration du stockage RAID 5 (Serveur SRV-RAID)</h2>
        
        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Préparation des disques et installation de mdadm</h3>
        <p>Vérification de la détection des disques vierges : <code>lsblk</code></p>
        <img src="/Capt-List/image86.png" alt="Commande lsblk" />
        <p>Installation de l'utilitaire de gestion RAID :</p>
        <pre><code>sudo apt update && sudo apt install mdadm -y</code></pre>

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Création et formatage de la grappe RAID 5</h3>
        <p>Liaison des trois disques dans une grappe nommée md5 :</p>
        <pre><code>sudo mdadm --create /dev/md5 --level=5 --raid-devices=3 /dev/sdb /dev/sdc /dev/sdd</code></pre>
        <img src="/Capt-List/image87.png" alt="Création mdadm" />
        <p>Vérification de l'état de la synchronisation (statut <strong>[UUU]</strong>) : <code>cat /proc/mdstat</code></p>
        <img src="/Capt-List/image88.png" alt="Statut mdstat" />
        <p>Formatage en <strong>EXT4</strong> et montage du volume :</p>
        <pre><code>sudo mkfs.ext4 /dev/md5
sudo mkdir /mnt/veeam_repository
sudo mount /dev/md5 /mnt/veeam_repository</code></pre>
        <img src="/Capt-List/image89.png" alt="Formatage et montage" />

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-16">III. Déploiement de la sauvegarde (Serveur SRV-VEEAM)</h2>
        
        <h3 id="section-3a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Dimensionnement du serveur</h3>
        <p>Extension du disque système à <strong>40 Go</strong> pour accueillir l'OS, les binaires de Veeam et la base de données <strong>SQL Server</strong> sans risque de saturation.</p>

        <h3 id="section-3b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Installation de Veeam Backup & Replication</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li><strong>Montage de l'ISO :</strong> Image insérée dans le lecteur virtuel.</li>
          <li><strong>Lancement :</strong> Exécution de <code>Setup.exe</code> en tant qu'administrateur.</li>
          <li><strong>Installation :</strong> Utilisation des chemins par défaut (C:\\Program Files\\Veeam).</li>
          <li><strong>Validation :</strong> L'assistant installe automatiquement les prérequis manquants.</li>
        </ol>
        <img src="/Capt-List/image90.png" alt="Installation Veeam" />

        <h2 id="section-4" class="text-4xl font-bold text-white mb-6 mt-16">IV. Configuration de l'infrastructure de sauvegarde</h2>
        
        <h3 id="section-4a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Ajout du serveur de stockage (SRV-RAID)</h3>
        <p>Déclaration du serveur Linux dans la console :</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Onglet <strong>Backup Infrastructure</strong> > <strong>Managed Servers</strong>.</li>
          <li>Cliquer sur <strong>Add Server</strong> > <strong>Linux</strong>.</li>
          <li>Saisir l'IP : <strong>192.168.1.101</strong> et les identifiants SSH.</li>
        </ol>

        <h3 id="section-4b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Création du Backup Repository</h3>
        <p>Lien vers le dossier partagé sur le RAID 5 :</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Onglet <strong>Backup Infrastructure</strong> > <strong>Backup Repositories</strong>.</li>
          <li><strong>Add Repository</strong> > <strong>Direct Attached Storage</strong> > <strong>Linux</strong>.</li>
          <li>Nom : <strong>RAID5_Linux_Storage</strong>.</li>
          <li>Sélectionner le chemin : <code>/mnt/veeam_repository</code> et cliquer sur <strong>Populate</strong>.</li>
        </ol>

        <h2 id="section-5" class="text-4xl font-bold text-white mb-6 mt-16">V. Configuration et exécution de la sauvegarde</h2>
        
        <h3 id="section-5a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Création du Job de sauvegarde</h3>
        <p>Protection d'une machine cliente (ex: 192.168.1.103) :</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Onglet <strong>Home</strong> > <strong>Jobs</strong> > <strong>Backup</strong> > <strong>Windows Computer</strong>.</li>
          <li>Cible : IP du client. Stockage : <strong>RAID5_Linux_Storage</strong>.</li>
          <li>Rétention : 7 jours.</li>
        </ol>

        <h3 id="section-5b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Test de résilience : Simulation de panne</h3>
        <p>Validation de la robustesse du RAID 5 :</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li><strong>Panne forcée :</strong> <code>sudo mdadm /dev/md5 --fail /dev/sdc</code>.</li>
          <li><strong>Vérification :</strong> <code>cat /proc/mdstat</code> (statut <strong>[U_U]</strong>).</li>
          <li><strong>Restauration :</strong> Lancement d'un "Restore" via la console Veeam.</li>
          <li><strong>Résultat :</strong> Restauration réussie malgré le disque manquant.</li>
        </ol>
      </div>
    `,
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Sécuriser une infrastructure avec RAID 5 Linux et Veeam Backup & Replication sur Windows Server 2019.pdf" }],
    skills: ["sauvegardes", "continuite", "tests"]
  },
{
    id: "form_dhcp_dns",
    title: "Services Réseaux (DHCP, DNS)",
    type: "formation",
    context: "TP réalisé au Lycée Lamartine.",
    objectives: "Déployer les services de base pour l'adressage et la résolution de noms sur un réseau local.",
    description: "Dans le cadre de ce TP, nous avons mis en place une infrastructure réseau hybride. L'objectif était de diviser les services critiques (DHCP et DNS) entre deux systèmes d'exploitation majeurs.\n• Serveur Windows (SRVW_DHCPetDNS) : Gère le segment d'adresses .10 à .50.\n• Serveur Linux (SRVL_DHCPetDNS) : Gère le segment d'adresses .110 à .150.\nCette segmentation a permis d'assurer une redondance de services sur le réseau 192.168.1.0/24.",
    tools: ["Windows Server", "Linux (Debian)", "ISC-DHCP-Server", "Bind9"],
    difficulties: "Problème lié au nom de la machine Windows Server généré par défaut (caractères aléatoires). Il a fallu le modifier avant configuration pour éviter des conflits de noms sur le réseau par la suite.",
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Configuration de SRVW_DHCPetDNS (Windows)</h2>
        
        <h3 id="section-1a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation des Rôles</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Ouvrez le <strong>Gestionnaire de serveur</strong>.</li>
          <li>Allez dans <strong>Gérer</strong> > <strong>Ajouter des rôles et fonctionnalités</strong>.</li>
          <li>Cochez les rôles <strong>Serveur DHCP</strong> et <strong>Serveur DNS</strong>.</li>
          <li>Une fois l'installation terminée, finalisez la configuration via le drapeau de notification.</li>
        </ol>
        <img src="/Capt-List/image55.png" alt="Installation rôles Windows" />
        <p class="bg-zinc-900 p-4 border-l-4 border-yellow-500 text-xl italic mb-6">
          <strong>Vigilance :</strong> Assurez-vous que le service Serveur DNS est bien en cours d'exécution dans <code>services.msc</code> pour que le port 53 soit ouvert.
        </p>

        <h3 id="section-1b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Configuration du DHCP (L'Étendue)</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Ouvrez la console <strong>DHCP</strong>.</li>
          <li>Faites un clic droit sur <strong>IPv4</strong> > <strong>Nouvelle étendue</strong>.</li>
          <li><strong>Nom :</strong> Pool_Windows_SISR.</li>
          <li><strong>Plage :</strong> de 192.168.1.10 à 192.168.1.50.</li>
          <li><strong>Options :</strong> Routeur (003) : 192.168.1.254 | Serveurs DNS (006) : 192.168.1.103.</li>
        </ol>
        <img src="/Capt-List/image56.png" alt="Configuration étendue DHCP Windows" />

        <h3 id="section-1c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Configuration du DNS (Zone directe)</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Dans le <strong>Gestionnaire DNS</strong>, créez une zone principale nommée <strong>tp.windows.lan</strong>.</li>
          <li>Ajoutez un enregistrement <strong>A</strong> : SRVW -> 192.168.1.103.</li>
        </ol>
        <img src="/Capt-List/image57.png" alt="Zone DNS directe Windows" />
        <p class="bg-zinc-900 p-4 border-l-4 border-red-500 text-xl italic">
          <strong>Point Critique (Pare-feu) :</strong> Vous devez impérativement créer une règle de trafic entrant pour le port <strong>53 (UDP/TCP)</strong> pour autoriser les requêtes.
        </p>

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-24">II. Configuration de SRVL_DHCPetDNS (Linux)</h2>
        
        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation et DHCP (ISC-DHCP-Server)</h3>
        <p><strong>1. Installation :</strong> <code>sudo apt update && sudo apt install isc-dhcp-server -y</code></p>
        <p><strong>2. Édition de /etc/dhcp/dhcpd.conf :</strong></p>
        <pre><code>authoritative;
subnet 192.168.1.0 netmask 255.255.255.0 {
  range 192.168.1.110 192.168.1.150;
  option routers 192.168.1.254;
  option domain-name-servers 192.168.1.204;
  option domain-name "tp.linux.lan";
  default-lease-time 600;
  max-lease-time 7200;
}</code></pre>
        <p><strong>3. Interface d'écoute :</strong> Dans <code>/etc/default/isc-dhcp-server</code>, modifiez : <code>INTERFACESv4="enp0s3"</code></p>
        <p><strong>4. Redémarrage :</strong> <code>sudo systemctl restart isc-dhcp-server</code></p>

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Configuration du DNS (Bind9)</h3>
        <p><strong>1. Installation :</strong> <code>sudo apt install bind9 -y</code></p>
        <p><strong>2. Déclaration de zone (/etc/bind/named.conf.local) :</strong></p>
        <pre><code>zone "tp.linux.lan" {
  type master;
  file "/etc/bind/db.tp.linux.lan";
};</code></pre>
        <p><strong>3. Fichier de zone :</strong> Configurez les enregistrements NS et A dans le fichier pointé. N'oubliez pas le point final (srvl.tp.linux.lan.) pour éviter les erreurs FQDN.</p>
        <img src="/Capt-List/image58.png" alt="Configuration Bind9" />

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-24">III. Validation et Tests de bon fonctionnement</h2>
        <p><strong>1. Test DHCP :</strong> Lancez <code>ipconfig /renew</code> sur un client. Vérifiez si l'IP reçue appartient au pool Windows (.10-.50) ou Linux (.110-.150).</p>
        <img src="/Capt-List/image59.png" alt="Test DHCP Client" />
        
        <p><strong>2. Test DNS :</strong></p>
        <ul class="list-disc pl-6 space-y-4">
          <li>Résolution Windows : <code>nslookup srvw.tp.windows.lan 192.168.1.103</code>
            <br/><img src="/Capt-List/image60.png" alt="nslookup Windows" class="mt-2" />
          </li>
          <li>Résolution Linux : <code>nslookup srvl.tp.linux.lan 192.168.1.204</code>
            <br/><img src="/Capt-List/image61.png" alt="nslookup Linux" class="mt-2" />
          </li>
        </ul>
      </div>
    `,
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Déploiement des services DHCP et DNS.pdf" }],
    skills: ["deployer", "exploiter", "continuite"] 
    
    
  },
{
    id: "form_pfsense",
    title: "Pare-feu pfSense",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Sécuriser les flux réseaux entre différentes zones (LAN, WAN, DMZ).",
    description: "Dans le cadre de ce TP, nous avons mis en place une architecture réseau segmentée s'appuyant sur pfSense. L'objectif était de sécuriser les flux et d'isoler les services critiques en séparant physiquement et logiquement les réseaux. L'architecture retenue était la suivante :\n• WAN (Interface externe) : Accès vers Internet via la passerelle de l'établissement.\n• LAN (Réseau local) : Zone d'administration et clients internes (ex: 192.168.1.0/24).\n• DMZ (Zone Démilitarisée) : Zone isolée accueillant le serveur Windows Server 2019 (ex: 172.16.0.0/24)",
    tools: ["pfSense", "Firewall", "NAT", "Squid"],
    difficulties: "Le trafic vers la DMZ était bloqué. Le problème venait d'une confusion entre 'LAN address' et 'LAN subnet' dans les règles du pare-feu. Résolu en utilisant 'LAN subnet' qui regroupe l'ensemble du réseau.",
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Installation de pfSense</h2>
        <p>L'installation est réalisée sur une machine virtuelle. Avant de procéder, il est impératif d'ajouter <strong>3 cartes réseaux</strong> (VNET ou Bridges) dans les paramètres de votre hyperviseur.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Démarrez sur l'image ISO de pfSense.</li>
          <li>Acceptez les conditions (<strong>Accept</strong>) et sélectionnez <strong>Install</strong>.</li>
          <li>Procédez au mappage du clavier (French).</li>
          <li>Choisissez le partitionnement <strong>Auto (ZFS)</strong>, idéal pour la stabilité du système de fichiers en 2026.</li>
          <li>Une fois l'installation terminée, retirez l'ISO et redémarrez.</li>
        </ol>

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-16">II. Configuration des interfaces (LAN, WAN, DMZ)</h2>
        <p>Après le redémarrage, l'affectation des interfaces se fait directement sur la console textuelle de pfSense.</p>
        
        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Assignation des cartes (Assign Interfaces)</h3>
        <p>Choisissez l'option <strong>1</strong> du menu :</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Identifiez les interfaces via leurs adresses MAC.</li>
          <li>Attribuez le WAN (ex: le0), le LAN (ex: le1) et l'interface optionnelle pour la DMZ (ex: le2).</li>
        </ul>

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Configuration IP (Set interface IP address)</h3>
        <p>Choisissez l'option <strong>2</strong> pour définir les adresses statiques :</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>LAN :</strong> 192.168.1.254 avec un masque en /24.</li>
          <li><strong>DMZ (OPT1) :</strong> 172.16.0.254 avec un masque en /24.</li>
        </ul>
        <p><em>Pensez à activer le renommage de l'interface "OPT1" en "DMZ" via l'interface Web pour plus de clarté.</em></p>
        <img src="/Capt-List/image49.png" alt="Console Configuration Interfaces" />

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-16">III. Mise en place des règles de filtrage (Firewall)</h2>
        <p>Le principe du pare-feu est de tout bloquer par défaut et de n'autoriser que le nécessaire (moindre privilège).</p>
        
        <h3 id="section-3a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Autoriser le LAN vers l'extérieur</h3>
        <p>Pour permettre aux administrateurs de naviguer, allez dans <strong>Firewall > Rules > LAN</strong> et appliquez la politique suivante :</p>
        
        <div class="overflow-x-auto my-6">
          <table class="w-full border-collapse border border-zinc-800 text-lg">
            <thead>
              <tr class="bg-zinc-900">
                <th class="border border-zinc-800 p-3">Service</th>
                <th class="border border-zinc-800 p-3">Protocole</th>
                <th class="border border-zinc-800 p-3">Destination</th>
                <th class="border border-zinc-800 p-3">Port</th>
                <th class="border border-zinc-800 p-3">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-zinc-800 p-3">Anti-Lockout</td>
                <td class="border border-zinc-800 p-3">TCP</td>
                <td class="border border-zinc-800 p-3">LAN Address</td>
                <td class="border border-zinc-800 p-3">80</td>
                <td class="border border-zinc-800 p-3">Règle anti-blocage</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-3">HTTPS</td>
                <td class="border border-zinc-800 p-3">TCP</td>
                <td class="border border-zinc-800 p-3">Any</td>
                <td class="border border-zinc-800 p-3">443</td>
                <td class="border border-zinc-800 p-3">Flux HTTPS LAN</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-3">HTTP</td>
                <td class="border border-zinc-800 p-3">TCP</td>
                <td class="border border-zinc-800 p-3">Any</td>
                <td class="border border-zinc-800 p-3">80</td>
                <td class="border border-zinc-800 p-3">Flux HTTP LAN</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-3">DNS</td>
                <td class="border border-zinc-800 p-3">TCP/UDP</td>
                <td class="border border-zinc-800 p-3">Any</td>
                <td class="border border-zinc-800 p-3">53</td>
                <td class="border border-zinc-800 p-3">Résolution DNS</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-3">Ping</td>
                <td class="border border-zinc-800 p-3">ICMP</td>
                <td class="border border-zinc-800 p-3">Any</td>
                <td class="border border-zinc-800 p-3">*</td>
                <td class="border border-zinc-800 p-3">Autoriser ICMP</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src="/Capt-List/image50.png" alt="Règles Firewall LAN" />

        <h3 id="section-3b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Isoler la DMZ du LAN</h3>
        <p>Le serveur Windows Server 2019 ne doit jamais pouvoir initier de connexion vers le réseau d'administration (LAN). Allez dans <strong>Firewall > Rules > DMZ</strong> :</p>
        
        <div class="overflow-x-auto my-6">
          <table class="w-full border-collapse border border-zinc-800 text-lg">
            <thead>
              <tr class="bg-zinc-900">
                <th class="border border-zinc-800 p-3">Action</th>
                <th class="border border-zinc-800 p-3">Protocole</th>
                <th class="border border-zinc-800 p-3">Destination</th>
                <th class="border border-zinc-800 p-3">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-red-400 font-bold">
                <td class="border border-zinc-800 p-3">BLOCK</td>
                <td class="border border-zinc-800 p-3">Any</td>
                <td class="border border-zinc-800 p-3">LAN subnets</td>
                <td class="border border-zinc-800 p-3">Bloquer DMZ vers LAN</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-3">PASS</td>
                <td class="border border-zinc-800 p-3">TCP</td>
                <td class="border border-zinc-800 p-3">Any</td>
                <td class="border border-zinc-800 p-3">Flux Web DMZ</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-3">PASS</td>
                <td class="border border-zinc-800 p-3">TCP/UDP</td>
                <td class="border border-zinc-800 p-3">Any</td>
                <td class="border border-zinc-800 p-3">DNS DMZ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src="/Capt-List/image51.png" alt="Règles Firewall DMZ" />

        <h2 id="section-4" class="text-4xl font-bold text-white mb-6 mt-16">IV. Publication du serveur Web (NAT Port Forwarding)</h2>
        <p>Pour rendre le serveur Web situé en DMZ (172.16.0.10) accessible depuis l'extérieur (WAN), allez dans <strong>Firewall > NAT > Port Forward</strong> :</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Interface :</strong> WAN</li>
          <li><strong>Protocol :</strong> TCP</li>
          <li><strong>Destination Port :</strong> 80 (HTTP)</li>
          <li><strong>Redirect Target IP :</strong> 172.16.0.10</li>
        </ul>
        <img src="/Capt-List/image52.png" alt="Configuration NAT Port Forward" />

        <h2 id="section-5" class="text-4xl font-bold text-white mb-6 mt-16">V. Filtrage Web avec le proxy Squid</h2>
        <p>Installation via <strong>System > Package Manager</strong>. Dans <strong>Services > Squid Proxy Server</strong> :</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Cochez <strong>Enable Squid Proxy</strong>.</li>
          <li>Activez le <strong>Transparent HTTP Proxy</strong> sur l'interface LAN.</li>
          <li>Dans l'onglet <strong>ACLs</strong>, renseignez les domaines interdits (ex: facebook.com) dans la <strong>Blacklist</strong>.</li>
        </ul>
        <img src="/Capt-List/image53.png" alt="Installation Squid" />
        <img src="/Capt-List/image54.png" alt="Configuration Blacklist Squid" />
        <p class="bg-zinc-900 p-4 border-l-4 border-indigo-500 text-xl italic">
          <strong>* Note technique :</strong> Le mode transparent intercepte nativement le flux HTTP. Pour filtrer le HTTPS sans certificats clients, un filtrage DNS (pfBlockerNG) est recommandé.
        </p>

        <h2 id="section-6" class="text-4xl font-bold text-white mb-6 mt-16">VI. Tests de fonctionnement et validation</h2>
        <p><strong>A. Validation LAN :</strong> Test DNS (nslookup google.fr) et Navigation (https://pfsense.org) réussis depuis le PC Client.</p>
        <p><strong>B. Validation DMZ :</strong> 
          <ul class="list-disc pl-6 mt-2">
            <li><strong>Test d'étanchéité :</strong> ping vers LAN (192.168.1.10) -> <strong>Échec</strong> (Isolation OK).</li>
            <li><strong>Test de sortie Web :</strong> curl -I http://google.com -> <strong>Réussite</strong>.</li>
          </ul>
        </p>
        <p><strong>C. Validation NAT :</strong> Accès via l'IP WAN de pfSense depuis l'extérieur -> <strong>Réussite</strong> (Affichage page IIS).</p>
      </div>
    `,
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer pfSense avec 3 interfaces (LAN, WAN, DMZ).pdf" }],
    skills: ["regles", "habilitation", "deployer"] 
  },
{
    id: "form_fog",
    title: "Serveur de déploiement (FOG)",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Automatiser le déploiement de systèmes d'exploitation sur un parc de machines.",
    description: "L'objectif de ce TP était de mettre en place une solution de déploiement automatisée. Nous avons utilisé Windows Server 2019 pour les services d'infrastructure (DNS/DHCP) et FOG Server (sur Debian) pour la gestion des images. Cette architecture permet de cloner des postes de travail via le réseau grâce au protocole PXE.",
    tools: ["FOG Project", "Linux", "PXE", "TFTP", "Sysprep"],
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Installation du serveur FOG sur Debian</h2>
        <p>L'installation s'effectue sur une base Debian 12 à jour.</p>

        <h3 id="section-1a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Préparation du système Debian</h3>
        <p>L'installation commence par la préparation de l'environnement Linux pour accueillir les sources de FOG.</p>
        <ol class="list-decimal pl-6 space-y-4 mb-6">
          <li><strong>Mise à jour des dépôts et du système :</strong> <pre><code>apt update && apt upgrade -y</code></pre></li>
          <li><strong>Installation de Git :</strong> <pre><code>apt install git -y</code></pre></li>
          <li><strong>Récupération des sources et lancement :</strong>
            <pre><code>cd /opt
git clone https://github.com/FOGProject/fogproject.git
cd fogproject/bin
./installfog.sh</code></pre>
          </li>
        </ol>
        <ul class="list-disc pl-6 space-y-2 mb-6 text-zinc-400">
          <li><strong>cd /opt :</strong> Répertoire standard pour l'installation de logiciels tiers.</li>
          <li><strong>git clone :</strong> Téléchargement de l'intégralité du projet FOG.</li>
          <li><strong>./installfog.sh :</strong> Script configurant Apache, PHP, MySQL (MariaDB) et TFTP.</li>
        </ul>

        <h3 id="section-1b" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">B. Configuration du script d'installation</h3>
        <p>Lors de l'exécution du script, renseignez les paramètres suivants :</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Type d'installation :</strong> N (Normal)</li>
          <li><strong>Interface réseau :</strong> enp0s3 (à vérifier avec <code>ip a</code>)</li>
          <li><strong>Adresse du routeur :</strong> 192.168.1.254 (votre passerelle)</li>
          <li><strong>Adresse DNS :</strong> IP de votre Windows Server 2019</li>
          <li><strong>Utiliser FOG pour le DHCP :</strong> N (Indispensable : c'est Windows Server qui gère le DHCP)</li>
          <li><strong>HTTPS :</strong> N (pour éviter les problèmes de certificats en TP)</li>
          <li><strong>Hostname :</strong> SRV-FOG</li>
        </ul>

        <h3 id="section-1c" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">C. Étape critique : Mise à jour de la base de données</h3>
        <p>Lorsque le script s'arrête, <strong>ne fermez pas le terminal</strong>.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Ouvrez un navigateur : <code>http://192.168.1.110/fog/management</code>.</li>
          <li>Cliquez sur le bouton bleu <strong>"Install/Update Now"</strong>.</li>
          <li>Une fois terminé, revenez au terminal et appuyez sur <strong>Entrée</strong>.</li>
        </ol>

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-16">II. Configuration du DHCP sur Windows Server 2019</h2>
        <p>Pour que les clients trouvent FOG, configurez les options d'étendue sur votre serveur Windows :</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Ouvrez la console <strong>DHCP</strong>.</li>
          <li>Allez dans <strong>IPv4</strong> > <strong>Étendue</strong> > <strong>Options d'étendue</strong>.</li>
          <li>Faites un clic droit > <strong>Configurer les options</strong>.</li>
          <li><strong>Option 066 (Serveur de démarrage) :</strong> IP du serveur FOG (192.168.1.110).</li>
          <li><strong>Option 067 (Fichier de démarrage) :</strong> <code>undionly.kpxe</code> (pour VirtualBox mode BIOS).</li>
        </ol>
        <img src="/Capt-List/image1.png" alt="Configuration DHCP Option 066 067" />

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-16">III. Préparation du Master Windows 10</h2>
        <p>Le poste "Master" doit être préparé avant la capture :</p>
        <ol class="list-decimal pl-6 space-y-4 mb-6">
          <li><strong>Installation :</strong> Installez Windows 10 et vos logiciels.</li>
          <li><strong>Généralisation (Sysprep) :</strong>
            <pre><code>cd C:\\Windows\\System32\\Sysprep
sysprep.exe /generalize /oobe /shutdown</code></pre>
          </li>
          <li>Le PC s'éteint. <strong>Il est prêt pour la capture.</strong></li>
        </ol>
        <img src="/Capt-List/image2.png" alt="Sysprep Windows 10" />

        <h2 id="section-4" class="text-4xl font-bold text-white mb-6 mt-16">IV. Enregistrement et Capture de l'image</h2>
        <h3 id="section-4a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Création du réceptacle (Interface Web FOG)</h3>
        <p>Dans l'interface Web : <strong>Images</strong> > <strong>Create New Image</strong>.</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Nom : Win10-Master</li>
          <li>Operating System : Windows 10</li>
          <li>Image Type : Single Disk - Resizable</li>
        </ul>
        <img src="/Capt-List/image3.png" alt="Création Image FOG" />

        <h3 id="section-4b" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">B. Enregistrement du client (Poste Windows 10)</h3>
        <p>Démarrez la VM Windows 10 en <strong>Boot Réseau (PXE)</strong>.</p>
        <img src="/Capt-List/image4.png" alt="Boot PXE" />
        <p>Choisissez <strong>"Perform Full Host Registration and Inventory"</strong>.</p>
        <img src="/Capt-List/image5.png" alt="Full Registration FOG" />
        <p>Nommez l'hôte <strong>MasterWind10</strong> et validez les autres questions par défaut.</p>

        <h3 id="section-4c" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">C. Lancement de la capture</h3>
        <p>Sur l'interface Web : <strong>Hosts</strong> > <strong>List All Hosts</strong> > <strong>MasterWind10</strong>.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Dans <strong>Host Image</strong>, sélectionnez <strong>Win10-Master</strong> et cliquez sur <strong>Update</strong>.</li>
          <li>Allez dans <strong>Basic Tasks</strong> > <strong>Capture</strong>.</li>
          <li>Redémarrez le PC Master en PXE : la capture démarre avec <strong>Partclone</strong>.</li>
        </ol>
        <img src="/Capt-List/image6.png" alt="Capture Partclone" />

        <h2 id="section-5" class="text-4xl font-bold text-white mb-6 mt-16">V. Déploiement de l'image sur un nouveau poste</h2>
        <p><strong>1. Préparation :</strong> Créez une nouvelle VM avec un disque vide de taille suffisante.</p>
        <p><strong>2. Enregistrement rapide :</strong> Démarrez en PXE et sélectionnez <strong>"Quick Full Host Registration"</strong>. La machine s'éteint après l'inventaire.</p>
        <p><strong>3. Configuration du déploiement :</strong> Sur l'interface Web, sélectionnez le nouvel hôte.</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Liez l'image <strong>Win10-Master</strong>.</li>
          <li>Allez dans <strong>Basic Tasks</strong> > <strong>Deploy</strong> et validez.</li>
        </ul>
        <p><strong>4. Lancement :</strong> Démarrez la VM cible en PXE. <strong>Partclone</strong> effectuera la restauration du serveur vers le client.</p>
        <img src="/Capt-List/image7.png" alt="Déploiement Image" />
      </div>
    `,
    difficulties: "Problème de démarrage PXE sur les clients. Au départ, nous avions configuré 'undionly.kpxe' qui ne fonctionnait pas. Résolu en utilisant le fichier 'ipxe.efi' dans la configuration DHCP.",
    results: "Déploiement d'une salle de 15 PC réalisé en moins de 30 minutes au lieu d'une journée en manuel.",
    analysis: "L'industrialisation des déploiements est un gain de temps énorme pour un technicien système.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment déployer des images Windows 10 avec FOG et Windows Server 2019.pdf" }],
    skills: ["deployer", "planifier", "exploiter"] 
  },
{
    id: "form_vpn_rds",
    title: "Accès distant (OpenVPN & RDS)",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Permettre le télétravail sécurisé et l'accès aux applications d'entreprise depuis l'extérieur.",
    description: "L'objectif était de mettre en place deux passerelles VPN pour sécuriser les accès distants. Le premier était un serveur Linux, tandis que le second était un serveur Windows.\n• Réseau LAN : 192.168.1.0/24\n• SRV-VPN-LINUX : 192.168.1.241\n• SRV-VPN-WIN : 192.168.1.242\n• Plage d'adresses VPN (Tunnel) : 10.8.0.0/24",
    tools: ["Windows Server", "Linux", "OpenVPN", "RemoteApp", "PKI/Certificats"],
    difficulties: "Difficulté rencontrée pour l'installation d'OpenVPN sur le serveur Windows Server à cause du pare-feu. Il a fallu désactiver ou configurer le pare-feu pour autoriser le trafic.",
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Configuration du VPN sur Debian 12 (192.168.1.241)</h2>
        
        <h3 id="section-1a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation des services</h3>
        <p>On installe le moteur OpenVPN et l'outil de gestion des certificats Easy-RSA.</p>
        <pre><code>sudo apt update && sudo apt install openvpn easy-rsa -y</code></pre>

        <h3 id="section-1b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Création de la PKI et des Certificats</h3>
        <p>Cette étape établit la chaîne de confiance pour sécuriser les connexions.</p>
        <ol class="list-decimal pl-6 space-y-4 mb-6">
          <li><strong>Préparation :</strong> On initialise l'environnement de travail.
            <pre><code>make-cadir ~/openvpn-ca && cd ~/openvpn-ca
./easyrsa init-pki</code></pre>
            <img src="/Capt-List/image62.png" alt="Initialisation PKI Debian" />
          </li>
          <li><strong>Autorité de Certification (CA) :</strong> On génère le certificat maître.
            <pre><code>./easyrsa build-ca nopass</code></pre>
          </li>
          <li><strong>Certificat Serveur :</strong> On génère la clé et on la fait signer par le CA.
            <pre><code>./easyrsa gen-req server nopass
./easyrsa sign-req server server # Valider par 'yes'</code></pre>
            <img src="/Capt-List/image63.png" alt="Signature certificat serveur" />
          </li>
          <li><strong>Paramètres Diffie-Hellman :</strong> Indispensable pour l'échange sécurisé des clés.
            <pre><code>./easyrsa gen-dh</code></pre>
          </li>
        </ol>

        <h3 id="section-1c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Mise en service du Serveur</h3>
        <img src="/Capt-List/image64.png" alt="Déploiement fichiers PKI" />
        <ol class="list-decimal pl-6 space-y-4 mb-6">
          <li><strong>Déploiement :</strong>
            <pre><code>sudo cp pki/ca.crt pki/issued/server.crt pki/private/server.key pki/dh.pem /etc/openvpn/server/</code></pre>
          </li>
          <li><strong>Configuration (/etc/openvpn/server/server.conf) :</strong>
            <pre><code>port 1194
proto udp
dev tun
ca ca.crt
cert server.crt
key server.key
dh dh.pem
server 10.8.0.0 255.255.255.0
push "route 192.168.1.0 255.255.255.0" # Accès au LAN
cipher AES-256-GCM
status /var/log/openvpn-status.log
verb 3</code></pre>
          </li>
          <li><strong>Activation du routage (Forwarding) :</strong> Éditer <code>/etc/sysctl.conf</code>, décommenter <code>net.ipv4.ip_forward=1</code>, puis appliquer :
            <pre><code>sudo sysctl -p</code></pre>
          </li>
          <li><strong>Démarrage :</strong>
            <pre><code>sudo systemctl enable --now openvpn-server@server</code></pre>
            <img src="/Capt-List/image65.png" alt="Activation service OpenVPN" />
          </li>
        </ol>

        <h3 id="section-1d" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">D. Configuration du Client (Accès Windows)</h3>
        <img src="/Capt-List/image66.png" alt="Génération identifiants client" />
        <ol class="list-decimal pl-6 space-y-4 mb-6">
          <li><strong>Certificats Client :</strong>
            <pre><code>./easyrsa gen-req client1 nopass
./easyrsa sign-req client client1 # Valider par 'yes'</code></pre>
          </li>
          <li><strong>Fichier de configuration (client1.ovpn) :</strong>
            <pre><code>client
dev tun
proto udp
remote 192.168.1.241 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client1.crt
key client1.key
remote-cert-tls server
cipher AES-256-GCM
verb 3</code></pre>
          </li>
        </ol>

        <h3 id="section-1e" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">E. Validation et Tests sur le poste Client Windows</h3>
        <p>1. <strong>Installation :</strong> Télécharger OpenVPN GUI et l'installer.</p>
        <p>2. <strong>Déploiement :</strong> Copier les fichiers (ca.crt, client1.crt, client1.key, client1.ovpn) dans <code>C:\\Program Files\\OpenVPN\\config</code>.</p>
        <p>3. <strong>Connexion :</strong> Lancer OpenVPN GUI en tant qu'administrateur et cliquer sur <strong>Connecter</strong>.</p>
        <img src="/Capt-List/image67.png" alt="Validation visuelle connexion" />
        <p>4. <strong>Tests de connectivité :</strong>
          <ul class="list-disc pl-6 mt-2">
            <li><strong>Test Tunnel :</strong> <code>ping 10.8.0.1</code></li>
            <li><strong>Test Routage LAN :</strong> <code>ping 192.168.1.241</code></li>
          </ul>
        </p>
        <img src="/Capt-List/image68.png" alt="Résultats Ping" />

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-24">II. Configuration du VPN sur Windows Server 2019 (192.168.1.242)</h2>
        <img src="/Capt-List/image69.png" alt="Entête section Windows" />
        
        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation et préparation du moteur</h3>
        <p>Télécharger OpenVPN Community Edition et s'assurer que les composants "OpenSSL Utilities" sont cochés. Créer le répertoire de travail :</p>
        <pre><code>mkdir "C:\\Program Files\\OpenVPN\\config\\CLES"</code></pre>

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Création de la PKI et des Certificats (OpenSSL)</h3>
        <ol class="list-decimal pl-6 space-y-4 mb-6">
          <li><strong>Autorité de Certification (CA) :</strong>
            <pre><code>openssl genrsa -out ca.key 2048
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt</code></pre>
          </li>
          <li><strong>Certificat Serveur :</strong>
            <pre><code>openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt</code></pre>
          </li>
          <li><strong>Paramètres Diffie-Hellman :</strong>
            <pre><code>openssl dhparam -out dh.pem 2048</code></pre>
          </li>
        </ol>

        <h3 id="section-2c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Mise en service du Serveur Windows</h3>
        <p><strong>Fichier de configuration (C:\\OpenVPN\\config\\server.ovpn) :</strong></p>
        <pre><code>port 1195
proto udp
dev tun
ca "C:\\\\Program Files\\\\OpenVPN\\\\config\\\\CLES\\\\ca.crt"
cert "C:\\\\Program Files\\\\OpenVPN\\\\config\\\\CLES\\\\server.crt"
key "C:\\\\Program Files\\\\OpenVPN\\\\config\\\\CLES\\\\server.key"
dh "C:\\\\Program Files\\\\OpenVPN\\\\config\\\\CLES\\\\dh.pem"
server 10.9.0.0 255.255.255.0
push "route 192.168.1.0 255.255.255.0"
cipher AES-256-GCM
persist-key
persist-tun
verb 3</code></pre>
        <p><strong>Ouverture du Pare-feu :</strong></p>
        <pre><code>netsh advfirewall firewall add rule name="OpenVPN_Win" dir=in action=allow protocol=UDP localport=1195</code></pre>
        <p><strong>Démarrage :</strong> Lancer le service via <code>net start OpenVPNService</code>.</p>

        <h3 id="section-2d" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">D. Configuration du Client (Accès Windows)</h3>
        <p>Génération d'un jeu de clés spécifique :</p>
        <pre><code>openssl genrsa -out client1.key 2048
openssl req -new -key client1.key -out client1.csr
openssl x509 -req -in client1.csr -CA ca.crt -CAkey ca.key -set_serial 02 -out client1.crt</code></pre>
        <p><strong>Fichier client_win.ovpn :</strong></p>
        <pre><code>client
dev tun
proto udp
remote 192.168.1.242 1195
ca ca.crt
cert client1.crt
key client1.key
cipher AES-256-GCM</code></pre>

        <h3 id="section-2e" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">E. Validation et Tests sur le poste Client</h3>
        <p>Déployer les fichiers dans le dossier config du client. Activer la connexion.</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Test Tunnel :</strong> <code>ping 10.9.0.1</code> (Réponse immédiate).</li>
          <li><strong>Test Réseau :</strong> <code>ping 192.168.1.242</code> (Réponse de l'interface physique).</li>
        </ul>
      </div>
    `,
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Déploiement d'une infrastructure VPN mixte (Debian & Windows Server).pdf" }],
    skills: ["habilitation", "deployer", "continuite"] 
  },
{
    id: "form_supervision",
    title: "Supervision (Nagios, Zabbix)",
    type: "formation",
    context: "TP réalisé au Lycée Lamartine.",
    objectives: "Surveiller l'état de santé de l'infrastructure et être alerté en cas de panne.",
    description: "Pour ce TP, nous avons mis en place deux solutions de supervision. La première est Nagios Core, une référence pour la supervision, et la seconde est Zabbix, une solution moderne. L'objectif était de monitorer un serveur Windows Server 2019 ainsi que des hôtes Linux en configurant des seuils d'alerte.",
    tools: ["Nagios", "Zabbix", "SNMP", "Linux"],
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Installation des serveurs de supervision sur Linux</h2>
        <p>Pour ce TP, nous utiliserons une distribution de type Debian 12 ou Ubuntu 24.04 LTS pour héberger nos services de monitoring.</p>

        <h3 id="section-1a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation de Nagios Core 4.x</h3>
        <p>L'installation de Nagios Core sous Linux ne se fait pas via un simple apt install. Pour disposer de la version la plus stable en <strong>mars 2026</strong>, nous compilons les sources manuellement afin de maîtriser l'environnement de sécurité.</p>
        
        <h4 class="text-xl font-bold text-white mt-6 mb-2">1. Préparation de l'environnement</h4>
        <p>Nous mettons à jour le système et installons les dépendances de compilation, le serveur web Apache et l'utilitaire unzip (indispensable pour l'extraction de certains composants).</p>
        <pre><code>sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential apache2 php openssl perl make php-gd libgd-dev libapache2-mod-php libperl-dev libssl-dev daemon wget unzip</code></pre>

        <h4 class="text-xl font-bold text-white mt-6 mb-2">2. Téléchargement des sources</h4>
        <p>Nous récupérons l'archive de Nagios Core dans le répertoire temporaire. <em>Note : Veillez à bien respecter l'ordre des lettres du dossier /tmp.</em></p>
        <pre><code>cd /tmp
wget https://assets.nagios.com/downloads/nagioscore/releases/nagios-4.5.1.tar.gz
tar xzf nagios-4.5.1.tar.gz
cd nagios-4.5.1</code></pre>

        <h4 class="text-xl font-bold text-white mt-6 mb-2">3. Configuration et Création des utilisateurs</h4>
        <p>Avant de compiler, il est impératif de générer le Makefile adapté à votre système et de créer les comptes de service.</p>
        <pre><code># Préparation de la compilation
sudo ./configure --with-httpd-conf=/etc/apache2/sites-enabled
# Création de l'utilisateur et du groupe nagios
sudo make install-groups-users
# Ajout de l'utilisateur Apache (www-data) au groupe nagios
sudo usermod -a -G nagios www-data</code></pre>

        <h4 class="text-xl font-bold text-white mt-6 mb-2">4. Compilation et Installation des composants</h4>
        <p>C'est l'étape où nous transformons le code source en binaires exécutables.</p>
        <pre><code># Compilation du programme
sudo make all
# Installation des fichiers binaires et de configuration
sudo make install # Fichiers principaux
sudo make install-daemoninit # Scripts de démarrage Systemd
sudo make install-commandmode # Permissions sur les répertoires
sudo make install-config # Fichiers .cfg d'exemple</code></pre>

        <h4 class="text-xl font-bold text-white mt-6 mb-2">5. Configuration d'Apache et accès Web</h4>
        <p>Nous configurons l'interface web et créons le premier compte administrateur.</p>
        <pre><code>sudo make install-webconf
sudo a2enmod rewrite cgi
sudo systemctl restart apache2
# Création du compte nagiosadmin
sudo htpasswd -c /usr/local/nagios/etc/htpasswd.users nagiosadmin</code></pre>
        <img src="/Capt-List/image41.png" alt="Config Apache Nagios" />

        <h4 class="text-xl font-bold text-white mt-6 mb-2">6. Installation des Nagios Plugins (Moteur de vérification)</h4>
        <p>Sans les plugins, Nagios ne peut effectuer aucun test (Ping, CPU, etc.).</p>
        <pre><code>cd /tmp
wget https://nagios-plugins.org/download/nagios-plugins-2.4.6.tar.gz
tar xzf nagios-plugins-2.4.6.tar.gz
cd nagios-plugins-2.4.6
# Compilation et installation des plugins
sudo ./configure
sudo make
sudo make install</code></pre>

        <h4 class="text-xl font-bold text-white mt-6 mb-2">7. Vérification et mise en service</h4>
        <p>Avant de démarrer, nous effectuons un "Pre-flight check" pour valider la syntaxe des fichiers de configuration.</p>
        <pre><code>sudo /usr/local/nagios/bin/nagios -v /usr/local/nagios/etc/nagios.cfg</code></pre>
        <img src="/Capt-List/image42.png" alt="Nagios Check" />
        <p>Si le rapport indique <strong>Total Errors: 0</strong>, lancez le service :</p>
        <pre><code>sudo systemctl start nagios
sudo systemctl enable nagios</code></pre>
        <p><strong>Accès à l'interface</strong></p>
        <p>L'interface de supervision est désormais accessible à l'adresse suivante : http://&lt;IP_DE_VOTRE_SERVEUR&gt;/nagios</p>
        <p>Connectez-vous avec : <strong>nagiosadmin</strong> / Mot de passe défini à l'étape 5.</p>
        <img src="/Capt-List/image43.png" alt="Interface Nagios" />

        <h3 id="section-1b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Installation de Zabbix Server 7.0 (Nginx + PostgreSQL)</h3>
        <p>Contrairement à Nagios, Zabbix s'appuie massivement sur une base de données relationnelle pour stocker l'historique des métriques. Nous utilisons ici <strong>PostgreSQL</strong>, choisi pour sa robustesse et ses performances avec les gros volumes de données en 2026.</p>
        
        <h4 class="text-xl font-bold text-white mt-4 font-semibold">1. Configuration du dépôt officiel</h4>
        <pre><code>wget https://repo.zabbix.com/zabbix/7.0/debian/pool/main/z/zabbix-release/zabbix-release_latest+debian12_all.deb
sudo dpkg -i zabbix-release_latest+debian12_all.deb
sudo apt update</code></pre>

        <h4 class="text-xl font-bold text-white mt-4 font-semibold">2. Installation des paquets et services</h4>
        <p>Nous installons le serveur, l'interface web, le moteur PostgreSQL et les scripts de base de données nécessaires. <em>Note : Sur Debian 12, nous utilisons la version stable <strong>PHP 8.2</strong>.</em></p>
        <pre><code>sudo apt install postgresql postgresql-contrib zabbix-server-pgsql zabbix-frontend-php php8.2-pgsql zabbix-nginx-conf zabbix-sql-scripts zabbix-agent -y</code></pre>

        <h4 class="text-xl font-bold text-white mt-4 font-semibold">3. Préparation de la base de données PostgreSQL</h4>
        <p>Il faut créer un utilisateur dédié et une base de données. <em>Attention : Veillez à bien orthographier "zabbix" pour éviter toute erreur d'importation.</em></p>
        <pre><code># Connexion à l'instance PostgreSQL
sudo -u postgres psql
# Commandes SQL à exécuter :
CREATE USER zabbix WITH PASSWORD '1234';
CREATE DATABASE zabbix OWNER zabbix;
\\q</code></pre>

        <h4 class="text-xl font-bold text-white mt-4 font-semibold">4. Importation du schéma initial</h4>
        <p>Cette étape injecte la structure des tables (plusieurs centaines) dans la base de données. Elle peut prendre environ 30 secondes.</p>
        <pre><code>zcat /usr/share/zabbix-sql-scripts/postgresql/server.sql.gz | sudo -u zabbix psql zabbix</code></pre>

        <h4 class="text-xl font-bold text-white mt-4 font-semibold">5. Configuration du serveur Zabbix</h4>
        <p>On indique au service Zabbix comment s'authentifier auprès de la base de données. Modifiez DBPassword=1234 dans /etc/zabbix/zabbix_server.conf.</p>

        <h4 class="text-xl font-bold text-white mt-4 font-semibold">6. Configuration de Nginx (Gestion de la cohabitation avec Nagios)</h4>
        <p>Nagios occupant déjà le port <strong>80</strong> avec Apache, nous configurons Nginx pour écouter sur le port <strong>8080</strong>.</p>
        <pre><code>listen 8080;
server_name 192.168.1.112; # L'IP de votre serveur Debian</code></pre>
        <p><em>Astuce : Pensez à supprimer le site par défaut d'Nginx pour éviter tout conflit : sudo rm /etc/nginx/sites-enabled/default.</em></p>

        <h4 class="text-xl font-bold text-white mt-4 font-semibold">7. Finalisation et démarrage</h4>
        <p>On active et redémarre l'ensemble des services pour valider la configuration.</p>
        <pre><code>sudo systemctl restart zabbix-server zabbix-agent nginx php8.2-fpm postgresql
sudo systemctl enable zabbix-server zabbix-agent nginx php8.2-fpm postgresql</code></pre>
        <p>L'interface de Zabbix est disponible à l'adresse : http://192.168.1.112:8080 (Identifiants par défaut : Admin / zabbix).</p>
        <img src="/Capt-List/image44.png" alt="Zabbix Setup" />

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-16">II. Déploiement de Zabbix Agent 2 (Windows Server)</h2>
        <p>L’installation via <strong>PowerShell</strong> a été privilégiée pour automatiser le processus sur le serveur <strong>192.168.1.103</strong>.</p>
        <p><strong>Ouverture du Pare-feu (PowerShell) :</strong></p>
        <pre><code>New-NetFirewallRule -DisplayName "Zabbix Agent 2" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 10050</code></pre>
        <img src="/Capt-List/image45.png" alt="Zabbix Agent Install" />
        <p><strong>Paramètres critiques :</strong> Host name: SRVW-DHCPETDNS, Server IP: 192.168.1.112, Port: 10050.</p>
        <img src="/Capt-List/image46.png" alt="Zabbix Agent Config" />

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-16">III. Configuration sur l'Interface Zabbix (Debian)</h2>
        <p>1. Déclaration de l'Hôte : IP 192.168.1.103 | Port 10050 | Groupe Windows servers.</p>
        <p>2. Liaison du Template : Windows by Zabbix agent.</p>
        <p>3. Test de rupture de service : Arrêt manuel du service DNS via la console Windows.</p>
        <img src="/Capt-List/image47.png" alt="Test Panne Zabbix" />
        <p><strong>Constat :</strong> Le déclencheur a détecté l'arrêt en moins de deux minutes avec une alerte de sévérité "Average".</p>

        <h2 id="section-4" class="text-4xl font-bold text-white mb-6 mt-16">IV. Validation du fonctionnement</h2>
        <p>La réussite est confirmée par l'icône <strong>ZBX au Vert</strong> et la remontée des métriques en temps réel dans Monitoring > Latest data.</p>
        <img src="/Capt-List/image48.png" alt="Validation Zabbix" />

        <h2 id="section-5" class="text-4xl font-bold text-white mb-6 mt-16">V. Déploiement de Nagios NSClient++ (Windows)</h2>
        <p>L'agent <strong>NSClient++</strong> permet à Nagios d'interroger les compteurs de performance Windows via le port <strong>12489</strong>.</p>
        <p><strong>Paramètres critiques :</strong> Allowed hosts: 192.168.1.112, Password: 1234. Modules activés : common check plugins, nsclient server (check_nt).</p>
        <img src="/Capt-List/image39.png" alt="NSClient Windows" />
        <p><strong>Ouverture du Pare-feu (PowerShell) :</strong></p>
        <pre><code>New-NetFirewallRule -DisplayName "Nagios NSClient" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 12489</code></pre>

        <h2 id="section-6" class="text-4xl font-bold text-white mb-6 mt-16">VI. Configuration du Serveur Nagios (Debian)</h2>
        <p>1. Résolution de l'incident "libexec vide" via création de liens symboliques :</p>
        <pre><code>sudo apt install monitoring-plugins-basic -y
sudo ln -s /usr/lib/nagios/plugins/* /usr/local/nagios/libexec/</code></pre>
        <p>2. Déclaration dans windows.cfg :</p>
        <pre><code>define host {
  use windows-server
  host_name winserver
  alias SRVW-DHCPETDNS
  address 192.168.1.103
}
define service {
  use generic-service
  host_name winserver
  service_description Uptime
  check_command check_nt!UPTIME!-s 1234
}</code></pre>
        <p>3. Validation et Redémarrage :</p>
        <pre><code>sudo /usr/local/nagios/bin/nagios -v /usr/local/nagios/etc/nagios.cfg
sudo systemctl restart nagios</code></pre>

        <h2 id="section-7" class="text-4xl font-bold text-white mb-6 mt-16">VII. Validation du fonctionnement (Nagios)</h2>
        <p>Disponibilité de l'hôte : statut <strong>UP (Vert)</strong>. Remontée des services (Uptime, CPU, RAM) : statut <strong>OK</strong>.</p>
        <img src="/Capt-List/image40.png" alt="Validation Nagios" />
      </div>
    `,
    difficulties: "Problème de communication entre le serveur Zabbix et l'agent Zabbix sur les machines clientes. Il a fallu configurer correctement l'adresse IP du serveur dans le fichier de configuration de l'agent.",
    results: "Tableaux de bord opérationnels. Remontée d'alertes en temps réel lors de la simulation d'une coupure de service.",
    analysis: "La supervision permet d'être proactif plutôt que réactif face aux pannes.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer Nagios Core et Zabbix sur Linux.pdf" }],
    skills: ["continuite", "evaluer", "traiter_res"] 
  },
{
    id: "form_glpi",
    title: "Gestion de parc et Helpdesk (GLPI)",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Mettre en place un outil de gestion de parc informatique (ITSM) et de ticketing.",
    description: "L'objectif de ce TP était de mettre en place un outil de gestion de parc informatique et de helpdesk. Nous avons installé GLPI sur une pile LAMP (Linux, Apache, MariaDB, PHP) et configuré les services demandés pour le TP.",
    tools: ["GLPI", "FusionInventory", "LAMP", "ITIL"],
    difficulties: "Problème de remontée d'inventaire avec FusionInventory : l'agent fonctionnait mais GLPI ne recevait pas la configuration du PC. Résolu en vérifiant l'URL du serveur et l'activation du plugin.",
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Prérequis</h2>
        <p>Avant de débuter, assurez-vous de disposer des éléments suivants :</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Un serveur sous <strong>Debian 12</strong> (utilisé pour ce TP en mars 2026).</li>
          <li>Une adresse IP statique configurée sur le serveur.</li>
          <li>Un accès <strong>root</strong> ou <strong>sudo</strong>.</li>
          <li>Un enregistrement DNS de type "A" créé sur votre contrôleur de domaine <strong>Windows Server 2019</strong> (ex: glpi.tp.local).</li>
        </ul>

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-16">II. Installation de la pile LAMP</h2>
        <p>Connectez-vous en SSH à votre serveur et mettez à jour les dépôts :</p>
        <pre><code>sudo apt update && sudo apt upgrade -y</code></pre>

        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation d'Apache, MariaDB et PHP</h3>
        <p>GLPI 10 nécessite des versions récentes de PHP pour fonctionner de manière optimale.</p>
        <pre><code>sudo apt install apache2 mariadb-server -y
sudo apt install php php-mysql php-cas php-gd php-mbstring php-curl php-xml php-zip php-bz2 php-intl php-ldap -y</code></pre>

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Sécurisation de MariaDB</h3>
        <p>Lancez le script de sécurisation pour durcir l'accès à la base de données :</p>
        <pre><code>sudo mysql_secure_installation</code></pre>
        <p><strong>Réponses recommandées :</strong> n (unix_socket), Y (root password), Y (anonymous), Y (remote root), Y (test DB), Y (privileges).</p>

        <h3 id="section-2c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Création de la base de données pour GLPI</h3>
        <pre><code>sudo mysql -u root -p
CREATE DATABASE db_glpi;
CREATE USER 'user_glpi'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON db_glpi.* TO 'user_glpi'@'localhost';
FLUSH PRIVILEGES;
EXIT;</code></pre>

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-16">III. Installation et initialisation de GLPI</h2>
        <h3 id="section-3a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Téléchargement et extraction</h3>
        <pre><code>cd /tmp
wget https://github.com/glpi-project/glpi/releases/download/10.0.12/glpi-10.0.12.tgz
sudo tar -xvzf glpi-10.0.12.tgz -C /var/www/html/</code></pre>

        <h3 id="section-3b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Gestion des droits (Permissions)</h3>
        <pre><code>sudo chown -R www-data:www-data /var/www/html/glpi
sudo chmod -R 755 /var/www/html/glpi</code></pre>

        <h3 id="section-3c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Configuration du VirtualHost Apache</h3>
        <p>Édition du fichier <code>/etc/apache2/sites-available/glpi.conf</code> :</p>
        <pre><code>&lt;VirtualHost *:80&gt;
  ServerName glpi.tp.local
  DocumentRoot /var/www/html/glpi/public
  &lt;Directory /var/www/html/glpi/public&gt;
    AllowOverride All
    Require all granted
  &lt;/Directory&gt;
&lt;/VirtualHost&gt;</code></pre>
        <p>Activation du site :</p>
        <pre><code>sudo apache2ctl configtest
sudo a2ensite glpi.conf
sudo a2enmod rewrite
sudo systemctl restart apache2</code></pre>

        <h3 id="section-3d" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">D. Assistant d'installation Web</h3>
        <p>Rendez-vous sur <strong>http://glpi.tp.local</strong>. Suivez l'assistant avec les identifiants de BDD créés précédemment. Une fois connecté (glpi/glpi), sécurisez l'installation :</p>
        <pre><code>sudo rm /var/www/html/glpi/install/install.php</code></pre>
        <img src="/Capt-List/image31.png" alt="Assistant GLPI" />

        <h2 id="section-4" class="text-4xl font-bold text-white mb-6 mt-16">IV. Configuration de l'inventaire avec GLPI Agent</h2>
        <h3 id="section-4a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Activation de l'inventaire sur le serveur (Debian)</h3>
        <p>Activez le module Rewrite d'Apache et rendez-vous dans <strong>Administration > Inventaire</strong> pour activer la réception.</p>
        <img src="/Capt-List/image32.png" alt="Activation Inventaire" />

        <h3 id="section-4b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Installation de l'agent sur un client Windows 10</h3>
        <p>Utilisez l'installeur MSI. URL du point d'inventaire : <strong>https://192.168.1.135/glpi/</strong>.</p>
        <img src="/Capt-List/image33.png" alt="Config Agent Windows" />
        <p>Forçage manuel de la remontée :</p>
        <pre><code>"C:\\Program Files\\GLPI-Agent\\glpi-agent" --server http://192.168.1.135/glpi/ --force</code></pre>
        <img src="/Capt-List/image34.png" alt="Force Agent" />

        <h3 id="section-4c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Installation de l'agent sur un client Linux</h3>
        <pre><code>wget https://github.com/glpi-project/glpi-agent/releases/download/1.16/glpi-agent-1.16-linux-installer.pl
sudo perl glpi-agent-1.16-linux-installer.pl --server="https://192.168.1.135/glpi/" --runnow</code></pre>
        <img src="/Capt-List/image35.png" alt="Inventaire natif Ordinateurs" />

        <h2 id="section-5" class="text-4xl font-bold text-white mb-6 mt-16">V. Gestion des entités, groupes et profils</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Entités :</strong> Cloisonnement du parc (ex: Siège, Agence A). <img src="/Capt-List/image36.png" alt="Entités" class="mt-4" /></li>
          <li><strong>Profils :</strong> Droits (Self-Service, Technician, Super-Admin). <img src="/Capt-List/image37.png" alt="Profils" class="mt-4" /></li>
        </ul>

        <h2 id="section-6" class="text-4xl font-bold text-white mb-6 mt-16">VI. Mise en place du module Helpdesk</h2>
        <h3 id="section-6a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Configuration des SLA (Service Level Agreements)</h3>
        <img src="/Capt-List/image38.png" alt="Menu SLA" />
        <p><strong>1. Calendrier :</strong> Définir les heures ouvrées dans Configuration > Calendriers.</p>
        <p><strong>2. Objectifs :</strong> Création des niveaux TTO (Time To Own - 2h) et TTR (Time To Resolve - 4h).</p>
        <img src="/Capt-List/image28.png" alt="SLA TTO" />
        <img src="/Capt-List/image29.png" alt="SLA TTR" />
        <p><strong>3. Automatisation :</strong> Via Administration > Règles > Règles métier pour les tickets.</p>

        <h3 id="section-6b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Cycle de vie d'un ticket</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Création par l'utilisateur.</li>
          <li>Attribution au technicien.</li>
          <li>Résolution technique.</li>
          <li>Clôture après validation.</li>
        </ol>
        <img src="/Capt-List/image30.png" alt="Ticket GLPI" />
      </div>
    `,
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer GLPI 10 sur une pile LAMP.pdf" }],
    skills: ["recenser", "collecter", "traiter_res"]
  },
{
    id: "form_lamp_iis",
    title: "Serveurs Web (IIS & Apache)",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Héberger des applications Web sur des environnements Windows et Linux.",
    description: "Pour ce TP, nous avons configuré un serveur nommé SRV-WEB qui centralisait nos services d'hébergement. Voici les paramètres de base que nous avons respectés :\n• Nom du serveur : SRV-WEB\n• Adresse IP : 172.16.0.10\n• Masque de sous-réseau : 255.255.255.0 (/24)",
    tools: ["IIS 10", "Apache2", "MySQL", "PHP", "SSL/TLS"],
    difficulties: "Difficulté principale rencontrée lors de la mise en place du certificat SSL et du DNS local. Le site n'était pas accessible via le nom de domaine en local, nécessitant des ajustements de configuration pour l'accès FQDN.",
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Configuration du serveur Web IIS (Windows Server 2019)</h2>
        
        <h3 id="section-1a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Paramétrage IP et nom d'hôte</h3>
        <p>Avant toute installation technique, nous devons préparer le socle système de <strong>SRV-WEB</strong>.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Dans le <strong>Gestionnaire de serveur</strong>, modifiez le nom de l'ordinateur pour <strong>SRV-WEB</strong>.</li>
          <li>Configurez l'interface réseau avec l'IP statique <strong>172.16.0.10</strong>.</li>
        </ol>
        <img src="/Capt-List/image13.png" alt="Paramétrage IP Windows" />

        <h3 id="section-1b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Installation des rôles Serveur Web (IIS) et Serveur DNS</h3>
        <p>L'activation des services Web et de résolution de noms sur <strong>SRV-WEB</strong> (172.16.0.10) s'effectue via l'assistant de Windows Server.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li><strong>Gestionnaire de serveur</strong> > <strong>Gérer</strong> > <strong>Ajouter des rôles et fonctionnalités</strong>.</li>
          <li>Sélectionner <strong>Installation basée sur un rôle ou une fonctionnalité</strong>.</li>
          <li>Choisir le serveur <strong>SRV-WEB</strong> dans le pool de serveurs.</li>
          <li>Dans la liste, cocher les deux rôles suivants :
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Serveur Web (IIS)</strong></li>
              <li><strong>Serveur DNS</strong></li>
            </ul>
          </li>
          <li>Pour chaque rôle, une fenêtre s'ouvre : cliquer sur <strong>Ajouter des fonctionnalités</strong> (pour inclure les consoles d'administration RSAT).</li>
          <li>Cliquer sur <strong>Suivant</strong> jusqu'à l'étape finale sans modifier les services par défaut.</li>
          <li>Cliquer sur <strong>Installer</strong> et confirmer la fin du processus.</li>
        </ol>
        <img src="/Capt-List/image14.png" alt="Installation rôles IIS et DNS" />

        <h3 id="section-1c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Génération du certificat auto-signé</h3>
        <p>La sécurisation des échanges sur l'IP <strong>172.16.0.10</strong> nécessite un certificat SSL/TLS. En environnement de test, nous utilisons un certificat auto-signé.</p>
        <p><strong>1. Accès au module des certificats</strong></p>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>Lancer le <strong>Gestionnaire des services Internet (IIS)</strong>.</li>
          <li>Dans le volet <strong>Connexions</strong> (à gauche), cliquer sur le serveur <strong>SRV-WEB</strong>.</li>
          <li>Dans la zone centrale, double-cliquer sur <strong>Certificats de serveur</strong>.</li>
        </ol>
        <p><strong>2. Création du certificat Cert-SRV-WEB</strong></p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Dans le volet <strong>Actions</strong> (à droite), cliquer sur <strong>Créer un certificat auto-signé...</strong>.</li>
          <li>Renseigner les paramètres suivants :
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Nom convivial :</strong> Cert-SRV-WEB</li>
              <li><strong>Magasin de certificats :</strong> Personnel</li>
            </ul>
          </li>
          <li>Cliquer sur <strong>OK</strong>. Le certificat est désormais disponible pour les liaisons.</li>
        </ol>
        <img src="/Capt-List/image15.png" alt="Génération certificat IIS" />

        <h3 id="section-1d" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">D. Gestion des Bindings (Liaisons HTTPS)</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Dans IIS, déplier <strong>Sites</strong> > Faire un clic droit sur <strong>Default Web Site</strong> > <strong>Modifier les liaisons</strong>.</li>
          <li>Cliquer sur <strong>Ajouter</strong>.</li>
          <li>Configurer la liaison comme suit :
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Type :</strong> https</li>
              <li><strong>Adresse IP :</strong> 172.16.0.10</li>
              <li><strong>Port :</strong> 443</li>
              <li><strong>Certificat SSL :</strong> Sélectionner <strong>Cert-SRV-WEB</strong>.</li>
            </ul>
          </li>
          <li>Valider par <strong>OK</strong> puis <strong>Fermer</strong>.</li>
        </ol>
        <img src="/Capt-List/image16.png" alt="Liaisons HTTPS IIS" />

        <h3 id="section-1e" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">E. Test de connectivité et validation du service Web</h3>
        <p><strong>1. Test local (sur SRV-WEB)</strong></p>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>Ouvrez un navigateur sur le serveur et saisissez : <strong>https://172.16.0.10</strong>.</li>
          <li><strong>Résultat attendu :</strong> Un message d'avertissement s'affiche (certificat auto-signé). Cliquez sur <strong>Accéder à la page Web</strong>.</li>
          <li>La page d'accueil par défaut d'IIS s'affiche avec le cadenas.</li>
        </ol>
        <img src="/Capt-List/image17.png" alt="Test local IIS HTTPS" />
        <p><strong>2. Test distant :</strong> Depuis une machine cliente, saisissez l'adresse : <strong>https://172.16.0.10</strong>. Le navigateur doit charger la page après validation de l'exception.</p>

        <h3 id="section-1f" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">F. Configuration du nom de domaine local (FQDN)</h3>
        <p>L'objectif est de rendre le service Web accessible via <strong>https://srv-web.btssio.local</strong>.</p>
        <p><strong>1. Host Header dans IIS</strong></p>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>Dans IIS, retournez dans les <strong>Liaisons</strong> du site.</li>
          <li>Sélectionnez <strong>https</strong> > <strong>Modifier</strong>.</li>
          <li>Nom d'hôte : <strong>srv-web.btssio.local</strong>.</li>
          <li>Cochez <strong>Exiger l'indication du nom du serveur (SNI)</strong>.</li>
        </ol>
        <img src="/Capt-List/image18.png" alt="Configuration SNI IIS" />
        <p><strong>2. Configuration DNS</strong></p>
        <p><strong>Création de la Zone :</strong> Dans le Gestionnaire DNS, créez une <strong>Zone de recherche directe</strong> nommée <strong>btssio.local</strong>.</p>
        <img src="/Capt-List/image19.png" alt="Création zone DNS" />
        <p><strong>Enregistrement d'hôte (A) :</strong> Dans cette zone, créez un nouvel hôte.</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>Nom :</strong> srv-web</li>
          <li><strong>IP :</strong> 172.16.0.10</li>
        </ul>
        <img src="/Capt-List/image20.png" alt="Enregistrement A DNS" />
        <img src="/Capt-List/image8.png" alt="Vérification enregistrement DNS" />
        <p><strong>3. Test final :</strong> Sur le client, videz le cache (<code>ipconfig /flushdns</code>) et accédez à <strong>https://srv-web.btssio.local</strong>.</p>
        <img src="/Capt-List/image9.png" alt="Test final FQDN Windows" />

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-24">II. Déploiement du serveur Web Apache2 (Debian - 172.16.0.11)</h2>
        
        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Installation du service Apache2</h3>
        <pre><code>sudo apt update
sudo apt install apache2 -y
systemctl status apache2</code></pre>
        <img src="/Capt-List/image10.png" alt="Installation Apache Debian" />

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Configuration du Virtual Host (Port 80)</h3>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>Répertoire : <code>sudo mkdir -p /var/www/site-linux</code></li>
          <li>Config : <code>sudo nano /etc/apache2/sites-available/srv-linux.conf</code></li>
        </ol>
        <pre><code>&lt;VirtualHost 172.16.0.11:80&gt;
  ServerName srv-linux.btssio.local
  DocumentRoot /var/www/site-linux
&lt;/VirtualHost&gt;</code></pre>
        <p>Activation : <code>sudo a2ensite srv-linux.conf</code> et <code>sudo systemctl restart apache2</code>.</p>
        <img src="/Capt-List/image11.png" alt="Activation Virtual Host Apache" />

        <h3 id="section-2c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Mise en place du HTTPS (SSL/TLS)</h3>
        <p><strong>1. Génération du certificat avec OpenSSL</strong></p>
        <pre><code>sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/srv-linux.key -out /etc/ssl/certs/srv-linux.crt</code></pre>
        <p><em>Note : Remplir <strong>Common Name</strong> avec <strong>srv-linux.btssio.local</strong>.</em></p>
        <p><strong>2. Configuration SSL (Port 443)</strong></p>
        <p>Activez le module : <code>sudo a2enmod ssl</code>. Créez <code>/etc/apache2/sites-available/srv-linux-ssl.conf</code> :</p>
        <pre><code>&lt;VirtualHost 172.16.0.11:443&gt;
  ServerName srv-linux.btssio.local
  DocumentRoot /var/www/site-linux
  SSLEngine on
  SSLCertificateFile /etc/ssl/certs/srv-linux.crt
  SSLCertificateKeyFile /etc/ssl/private/srv-linux.key
&lt;/VirtualHost&gt;</code></pre>
        <p>Activez le site SSL et redémarrez Apache.</p>

        <h3 id="section-2d" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">D. Validation du service Web Linux</h3>
        <p><strong>1. Test local :</strong> <code>sudo apt install curl -y</code> puis <code>curl -k https://172.16.0.11</code>. Le code HTML doit s'afficher.</p>
        <p><strong>2. Test distant :</strong> Accédez à <strong>https://172.16.0.11</strong> depuis un client. La page doit s'afficher en HTTPS.</p>

        <h3 id="section-2e" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">E. Mise en place du serveur DNS Bind9 (Debian)</h3>
        <p><strong>1. Installation :</strong> <code>sudo apt install bind9 -y</code>.</p>
        <p><strong>2. Déclaration de zone :</strong> Dans <code>/etc/bind/named.conf.local</code> :</p>
        <pre><code>zone "btssio.local" {
  type master;
  file "/etc/bind/db.btssio.local";
};</code></pre>
        <p><strong>3. Fichier de zone :</strong> Créez <code>/etc/bind/db.btssio.local</code> avec l'enregistrement A :</p>
        <pre><code>$TTL 604800
@ IN SOA srv-linux.btssio.local. admin.btssio.local. ( 2 86400 3600 604800 3600 )
@ IN NS srv-linux.btssio.local.
srv-linux IN A 172.16.0.11</code></pre>

        <h3 id="section-2f" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">F. Validation de l'infrastructure (Côté Client)</h3>
        <p>Configurez le DNS du client sur <strong>172.16.0.11</strong>. Testez la résolution : <code>nslookup srv-linux.btssio.local</code>.</p>
        <p>Accédez enfin à <strong>https://srv-linux.btssio.local</strong> dans le navigateur.</p>
        <img src="/Capt-List/image12.png" alt="Test final FQDN Linux" />
      </div>
    `,
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment déployer une infrastructure Web mixte  IIS sur Windows Server 2019 et LAMP sous Debian.pdf" }],
    skills: ["deployer", "evolution_web", "exploiter"] 
  },
{
    id: "form_adguard",
    title: "Filtrage DNS (AdGuard Home)",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Bloquer les publicités, les traqueurs et les domaines malveillants au niveau du réseau.",
    description: "Dans le cadre de ce TP, nous avons mis en place une solution de filtrage DNS AdGuard Home afin de bloquer les contenus indésirables au niveau du serveur avant même qu'ils n'atteignent le client.",
    tools: ["AdGuard Home", "DNS", "Linux", "DoH"],
    difficulties: "Problème d'installation d'AdGuard, le port 53 était déjà utilisé par le service systemd-resolved. Résolu en désactivant le service systemd-resolved.",
    steps: `
      <div class="documentation-complete">
        <p class="text-zinc-500 mb-8 italic">Publié le : 21/03/2026 | Auteur : Tom Marchand-Chatelet</p>

        <h2 id="section-1" class="text-4xl font-bold text-white mb-6">I. Prérequis</h2>
        <p>Avant de débuter, assurez-vous de disposer des éléments suivants :</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Un serveur sous <strong>Debian 12</strong> (ou Ubuntu 24.04).</li>
          <li>Une adresse IP statique (ex: 192.168.1.243).</li>
          <li>Un accès <strong>root</strong> ou <strong>sudo</strong>.</li>
          <li>Le rôle DHCP installé et configuré sur votre contrôleur de domaine <strong>Windows Server 2019</strong>.</li>
        </ul>

        <h2 id="section-2" class="text-4xl font-bold text-white mb-6 mt-16">II. Installation d'AdGuard Home</h2>
        <p>L'installation sous Linux est simplifiée grâce au script automatisé qui configure le service et les dépendances nécessaires.</p>
        
        <h3 id="section-2a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Exécution du script d'installation</h3>
        <p>Connectez-vous en SSH et lancez la commande suivante :</p>
        <pre><code>curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v</code></pre>
        <p>Le script va télécharger les binaires, créer un utilisateur dédié et enregistrer AdGuard Home comme un service système (systemd).</p>
        <img src="/Capt-List/image22.png" alt="Script installation AdGuard" />

        <h3 id="section-2b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Configuration du pare-feu (Optionnel)</h3>
        <p>Si ufw est actif, autorisez les ports nécessaires à l'administration et au service DNS :</p>
        <pre><code>sudo ufw allow 3000/tcp # Interface d'installation
sudo ufw allow 80/tcp # Interface Web finale
sudo ufw allow 53/udp # Requêtes DNS standards
sudo ufw allow 53/tcp # Requêtes DNS (TCP)</code></pre>

        <h3 id="section-2c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Initialisation via l'interface Web</h3>
        <p>Ouvrez votre navigateur et accédez à l'adresse suivante : <strong>http://192.168.1.243:3000</strong>.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li><strong>Assistant d'installation :</strong> Cliquez sur "Commencer".</li>
          <li><strong>Interfaces réseau :</strong>
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Interface d'administration :</strong> Port 80.</li>
              <li><strong>Interface DNS :</strong> Port 53.</li>
            </ul>
          </li>
          <li><strong>Compte Admin :</strong> Définissez un identifiant et un mot de passe robuste.</li>
          <li><strong>Finalisation :</strong> L'interface sera désormais accessible sur le port 80 (standard HTTP).</li>
        </ol>
        <img src="/Capt-List/image23.png" alt="Initialisation Web AdGuard" />

        <h2 id="section-3" class="text-4xl font-bold text-white mb-6 mt-16">III. Configuration des services demandés</h2>
        
        <h3 id="section-3a" class="text-2xl font-bold text-indigo-300 mb-4 mt-8">A. Ajout de listes de blocage (Blocklists)</h3>
        <p>L'objectif est de protéger le parc contre le phishing et les malwares.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Allez dans <strong>Filtres > Listes de blocage DNS</strong>.</li>
          <li>Cliquez sur <strong>Ajouter une liste de blocage > Choisir dans la liste</strong>.</li>
          <li>Cochez impérativement :
            <ul class="list-disc pl-6 mt-2">
              <li><em>AdGuard DNS filter</em> (Base).</li>
              <li><em>Malicious URL Blocklist</em>.</li>
              <li><em>Phishing Army</em>.</li>
            </ul>
          </li>
          <li>Cliquez sur <strong>Enregistrer</strong>.</li>
        </ol>
        <img src="/Capt-List/image24.png" alt="Blocklists AdGuard" />

        <h3 id="section-3b" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">B. Chiffrement des requêtes avec DNS over HTTPS (DoH)</h3>
        <p>Pour éviter que les requêtes des utilisateurs ne soient interceptées en clair à l'extérieur du réseau, nous utilisons des résolveurs amonts chiffrés.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Allez dans <strong>Paramètres > Paramètres DNS</strong>.</li>
          <li>Dans la zone <strong>Serveurs DNS d'amont</strong>, supprimez les serveurs par défaut et saisissez :
            <pre><code>https://dns.cloudflare.com/dns-query
https://dns.google/dns-query</code></pre>
          </li>
          <li>Sélectionnez le mode <strong>"Test de rapidité"</strong> (Parallel Queries) pour améliorer les performances.</li>
          <li>Cliquez sur <strong>Appliquer</strong>.</li>
        </ol>
        <img src="/Capt-List/image25.png" alt="Config DoH AdGuard" />

        <h3 id="section-3c" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">C. Résolution locale (Liaison avec l'Active Directory)</h3>
        <p>Pour que les noms du domaine Windows continuent d'être résolus (ex: serveur01.tp.local), configurez une redirection spécifique vers votre DC :</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Toujours dans <strong>Paramètres DNS</strong>, descendez vers <strong>Configuration DNS privée</strong>.</li>
          <li>Ajoutez l'adresse IP de votre contrôleur de domaine Windows Server 2019.</li>
          <li>Dans <strong>Serveurs DNS d'amont</strong>, ajoutez la règle suivante en haut de la liste : <code>[/tp.local/]192.168.1.100</code> (où 192.168.1.100 est l'IP de votre DNS Windows).</li>
        </ol>
        <img src="/Capt-List/image26.png" alt="Redirection DNS Locale" />

        <h3 id="section-3d" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">D. Intégration Windows Server 2019 (DHCP)</h3>
        <p>L'objectif est que tous les clients du domaine utilisent AdGuard Home sans intervention manuelle.</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Sur <strong>Windows Server 2019</strong>, ouvrez la console <strong>DHCP</strong>.</li>
          <li>Développez <strong>IPv4 > Étendue [votre étendue] > Options d'étendue</strong>.</li>
          <li>Modifiez l'option <strong>006 Serveurs DNS</strong> :
            <ul class="list-disc pl-6 mt-2">
              <li>Ajoutez l'IP de votre serveur AdGuard (<strong>192.168.1.243</strong>) en première position.</li>
              <li>Gardez l'IP du contrôleur de domaine en deuxième position pour la redondance.</li>
            </ul>
          </li>
          <li>Validez. Les clients recevront la configuration lors du prochain renouvellement de bail (<code>ipconfig /renew</code>).</li>
        </ol>
        <img src="/Capt-List/image27.png" alt="DHCP Option 006 AdGuard" />

        <h3 id="section-3e" class="text-2xl font-bold text-indigo-300 mb-4 mt-16">E. Analyse et Tableaux de bord</h3>
        <p>AdGuard Home offre une visibilité totale sur l'activité réseau, ce qui est essentiel pour la supervision.</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Tableau de bord :</strong> Affiche le pourcentage de requêtes bloquées et les clients les plus actifs.</li>
          <li><strong>Journal des requêtes :</strong> Permet de voir en temps réel quel client tente d'accéder à quel domaine. Il est possible de bloquer/débloquer un domaine d'un clic.</li>
          <li><strong>Services bloqués :</strong> Dans <strong>Paramètres > Services bloqués</strong>, vous pouvez restreindre l'accès à des plateformes entières (TikTok, Facebook, Discord) en un clic.</li>
        </ul>
        <img src="/Capt-List/image21.png" alt="Dashboard AdGuard" />
      </div>
    `,
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer AdGuard Home pour sécuriser votre réseau Windows Server .pdf" }],
    skills: ["regles", "deployer", "exploiter"] 
  },

  // --- ALTERNANCE (Gendarmerie) - SIMPLIFIÉ ---
  {
    id: "alt_acl",
    title: "Droits ACL sur partages",
    type: "alternance",
    objectives: "Gérer de manière fine et sécurisée les accès aux dossiers partagés suite aux mutations du personnel.",
    skills: ["habilitation", "regles", "traiter_res"]
  },
  {
    id: "alt_solaris",
    title: "Exploitation des tickets (Sol@ris)",
    type: "alternance",
    objectives: "Assurer le support technique de niveau 1 et 2 pour les unités de gendarmerie du groupement.",
    skills: ["collecter", "traiter_res", "traiter_app", "accompagner"]
  },
  {
    id: "alt_baie",
    title: "Restructuration baie réseau",
    type: "alternance",
    objectives: "Assainir et optimiser la baie de brassage de l'atelier technique pour améliorer les débits et la maintenance.",
    skills: ["recenser", "planifier", "deployer"]
  },
  {
    id: "alt_samba",
    title: "Serveurs de fichiers Samba",
    type: "alternance",
    objectives: "Mettre en place et maintenir des partages de fichiers sécurisés pour les différentes brigades.",
    skills: ["deployer", "patrimoine", "sauvegardes"]
  },

  // --- STAGE (Hisis Informatique) - SIMPLIFIÉ ---
  {
    id: "stage_audit",
    title: "Audit Cyber (MaturiN, OPSIMS)",
    type: "stage",
    objectives: "Évaluer la maturité cybersécurité des infrastructures clients (EHPAD, Hôpitaux) et proposer des plans d'action.",
    skills: ["analyser", "regles", "evaluer"]
  },
  {
    id: "stage_wifi",
    title: "Déploiement Wi-Fi Haute Densité",
    type: "stage",
    objectives: "Remplacer une dizaine de bornes Wi-Fi obsolètes par des modèles de nouvelle génération afin d'améliorer la couverture et les débits.",
    skills: ["recenser", "continuite", "traiter_res", "planifier", "tests", "deployer"]
  },
  {
    id: "stage_rustdesk",
    title: "Serveur RustDesk sur Proxmox",
    type: "stage",
    objectives: "Mettre en place une solution de prise en main à distance auto-hébergée (alternative à TeamViewer) pour le support technique.",
    skills: ["deployer", "patrimoine", "habilitation"]
  },
  {
    id: "stage_exchange",
    title: "Migration Exchange vers PowerShell",
    type: "stage",
    objectives: "Automatiser et fiabiliser la procédure de création et de migration des boîtes aux lettres Exchange.",
    skills: ["exploiter", "planifier", "accompagner"]
  },

  // --- PROJETS SCOLAIRES ---
{
    id: "scolaire_profils",
    title: "Centralisation et Automatisation des Profils Itinérants",
    type: "scolaire",
    context: "Projet de deuxième année",
    objectives: "Haute disponibilité et mobilité des utilisateurs",
    description: "Dans le cadre d'un projet de deuxième année portant sur la haute disponibilité et la mobilité des utilisateurs, j'ai déployé une infrastructure de profils itinérants sécurisée. L'objectif est de dissocier les données et paramètres des utilisateurs de leurs postes physiques pour les centraliser sur le serveur SRV-AD-01. Cette solution permet à un collaborateur de retrouver son environnement de travail complet (Bureau, Documents, AppData) sur n'importe quel ordinateur du domaine labo-it.local, garantissant ainsi la continuité de service en cas de panne matérielle d'un client.",
    tools: ["Windows Server", "Active Directory", "Profils Itinérants", "GPO", "PowerShell"],
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Configuration des profils itinérants sous Windows Server 2019.pdf" }],
    steps: `
      <div class="documentation-complete">
        <h2 id="section-1">I. Présentation du Projet</h2>
        <ul>
          <li><strong>Intitulé :</strong> Déploiement d'une infrastructure de profils itinérants sécurisée.</li>
          <li><strong>Contexte :</strong> Projet d'administration système réalisé sur l'infrastructure Windows Server labo-it.local.</li>
          <li><strong>Équipe :</strong> Réalisé en autonomie.</li>
        </ul>

        <h2 id="section-2">II. Objectifs du Projet</h2>
        <ul>
          <li>Dissocier les données des postes clients pour permettre la mobilité.</li>
          <li>Centraliser la gestion sur le serveur <strong>SRV-AD-01</strong>.</li>
          <li>Automatiser le déploiement des nouveaux postes via une structure d'Unités d'Organisation (OU).</li>
        </ul>

        <h2 id="section-3">III. Description détaillée des étapes de mise en place</h2>
        <p>Le cœur de ce projet a consisté à lier le stockage de fichiers à l'annuaire <strong>AD DS</strong> du serveur <strong>SRV-AD-01</strong>. L'objectif était de transformer un partage réseau en profils itinérants, tout en automatisant la gestion des droits via des GPO.</p>

        <h3 id="section-3-1">Architecture technique du projet</h3>
        ${zoomWrapper('<img src="/Capt-pro/image1.png" alt="Architecture" class="w-full h-auto" />')}
        <h3 id="section-3-2">Étape 1 : Création et Partage du répertoire racine</h3>
        <ol>
          <li><strong>Création du dossier :</strong> Sur le disque C: du serveur, création du dossier Profils.</li>
          <li><strong>Partage caché :</strong> Dossier configuré en "Profils$" pour le rendre invisible sur le réseau.</li>
          <li><strong>Autorisations :</strong> Contrôle total accordé au groupe "Tout le monde" (la sécurité réelle étant gérée par le NTFS).</li>
        </ol>
        <p><img src="/Capt-pro/image4.png" alt="Partage du répertoire" /></p>

        <h3 id="section-3-3">Étape 2 : Configuration de la Sécurité NTFS (Avancée)</h3>
        <p>Désactivation de l'héritage et configuration des droits pour le groupe "Utilisateurs du domaine" :</p>
        <ul>
          <li><strong>Portée :</strong> Ce dossier seulement.</li>
          <li><strong>Droits :</strong> Lecture et surtout <strong>"Création de dossiers / ajout de données"</strong> pour empêcher les utilisateurs de lire les dossiers des autres à la racine.</li>
        </ul>
        <p><img src="/Capt-pro/image5.png" alt="Sécurité NTFS Avancée" /></p>

        <h3 id="section-3-4">Étape 3 : Configuration des comptes dans l'Active Directory</h3>
        <p>Dans les propriétés de l'utilisateur, onglet Profil, le chemin suivant a été renseigné : <code>\\\\SRV-AD-01\\Profils$\\%username%</code>.</p>
        <p><img src="/Capt-pro/image6.png" alt="Configuration AD" /></p>

        <h3 id="section-3-5">Étape 4 : Déploiement de la GPO d'accès Administrateur</h3>
        <p>Création d'une GPO <strong>Profils_itinerants</strong> pour forcer l'ajout du groupe Administrateurs aux profils créés, permettant la maintenance ultérieure.</p>
        <p><img src="/Capt-pro/image7.png" alt="Création GPO" /></p>
        <p><img src="/Capt-pro/image8.png" alt="Paramètres GPO" /></p>

        <h3 id="section-3-6">Étape 5 : Automatisation de la jointure au domaine (redircmp)</h3>
        <p>Exécution de la commande <code>redircmp "OU=Postes_Clients,DC=labo-it,DC=local"</code> pour que tout nouveau poste intégré au domaine soit rangé directement dans l'OU cible gérée par nos GPO.</p>
        <p><img src="/Capt-pro/image2.png" alt="Commande redircmp" /></p>

        <h2 id="section-4">IV. Procédures de test et de diagnostic</h2>
        <p>Vérification du bon fonctionnement via :</p>
        <ul>
          <li><code>ipconfig /flushdns</code> et <code>nslookup</code> pour la résolution de noms.</li>
          <li><code>gpupdate /force</code> pour l'application des stratégies.</li>
          <li>Vérification visuelle de la création du dossier <code>nom.utilisateur.V6</code> sur le serveur.</li>
        </ul>
        <p><img src="/Capt-pro/image3.png" alt="Vérification serveur" /></p>

        <h2 id="section-5">V. Difficultés rencontrées et Solutions</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-zinc-800">
            <thead>
              <tr class="bg-zinc-900">
                <th class="border border-zinc-800 p-2">Problème rencontré</th>
                <th class="border border-zinc-800 p-2">Action corrective</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-zinc-800 p-2 font-bold text-white">Profil Temporaire au login</td>
                <td class="border border-zinc-800 p-2 text-zinc-400">Nettoyage de la clé de registre ProfileList (regedit) sur le client pour supprimer les traces de la session corrompue.</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-2 font-bold text-white">GPO non appliquée</td>
                <td class="border border-zinc-800 p-2 text-zinc-400">Déplacement manuel de l'ordinateur vers l'OU Postes_Clients (le conteneur Computers ne gère pas les GPO).</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-2 font-bold text-white">Accès refusé sur le serveur</td>
                <td class="border border-zinc-800 p-2 text-zinc-400">Correction de la syntaxe réseau DNS et validation des droits NTFS "Ce dossier seulement".</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="section-6">VI. Mise en évidence des compétences (Référentiel BTS SIO)</h2>
        <p><strong>Gérer le patrimoine informatique :</strong> Vérifier les conditions de la continuité d'un service (reprise d'activité immédiate sur un autre poste).</p>
        <p><strong>Gérer le patrimoine informatique :</strong> Gérer des sauvegardes (centralisation des données sur le serveur).</p>
        <p><strong>Répondre aux incidents :</strong> Traiter des demandes réseau et système (diagnostic DNS et manipulation de registre).</p>

        <h2 id="section-7">VII. Analyse personnelle et Prise de recul</h2>
        <p>Ce projet m'a appris que la rigueur de saisie (syntaxe des variables) et la configuration DNS sont les piliers d'Active Directory. L'utilisation de <code>redircmp</code> démontre que l'automatisation est indispensable pour gérer un parc de manière professionnelle.</p>
      </div>
    `
  },
{
    id: "scolaire_ada",
    title: "Interconnexion et Routage de l'Infrastructure ADA",
    type: "scolaire",
    context: "Projet de deuxième année",
    objectives: "Interconnexion complète du réseau national",
    description: "Dans le cadre du projet portant sur l'infrastructure du groupe ADA, leader de la location de véhicules, j'ai réalisé l'interconnexion complète de leur réseau national. Ce travail a permis d'établir une communication bidirectionnelle sécurisée entre le siège social (serveurs centraux) et les agences distantes via une architecture de routage complexe sous Linux Debian.",
    tools: ["Linux Debian", "Routage statique", "NAT/Masquerade", "Proxmox", "VLANs"],
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Interconnexion et routage de l'infrastructure ADA.pdf" }],
    steps: `
      <div class="documentation-complete">
        <h2 id="section-1">I. Présentation du Projet</h2>
        <ul>
          <li><strong>Intitulé :</strong> Mise en œuvre du routage statique et sécurisation des flux inter-agences.</li>
          <li><strong>Contexte :</strong> Projet réalisé pour le groupe <strong>ADA</strong> afin d'interconnecter les parcs informatiques nationaux.</li>
        </ul>

        <h2 id="section-2">II. Objectifs du Projet</h2>
        <ul>
          <li>Établir des routes statiques entre 4 segments réseaux distincts.</li>
          <li>Assurer la sortie Internet via un mécanisme de <strong>NAT/Masquerade</strong>.</li>
          <li>Permettre aux agences d'accéder aux serveurs centraux (172.16.0.0).</li>
        </ul>

        <h2 id="section-3">III. Description détaillée du travail réalisé</h2>
        <h3 id="section-3-1">1. Architecture Réseau</h3>
        ${zoomWrapper('<img src="/Capt-pro/image12.png" alt="Architecture réseau ADA" class="w-full h-auto" />')}
        <h3 id="section-3-2">2. Activation du routage (IP Forwarding)</h3>
        <p>Activation persistante via la directive <code>post-up echo 1 > /proc/sys/net/ipv4/ip_forward</code> dans le fichier interfaces.</p>

        <h3 id="section-3-3">3. Configuration des Routeurs (Post-Up)</h3>
        <ul>
          <li><strong>RTR1 (Passerelle Internet) :</strong> 
          <br/><img src="/Capt-pro/image13.png" alt="Configuration RTR1" class="mt-2" /></li>
          
          <li><strong>RTR2 (Routeur Intermédiaire) :</strong>
          <br/><img src="/Capt-pro/image14.png" alt="Configuration RTR2" class="mt-2" /></li>
          
          <li><strong>RTR3 (Cœur de Réseau VPN) :</strong>
          <br/><img src="/Capt-pro/image15.png" alt="Configuration RTR3" class="mt-2" /></li>
          
          <li><strong>RTR-AG01 (Routeur Agence) :</strong>
          <br/><img src="/Capt-pro/image16.png" alt="Configuration RTR-AG01" class="mt-2" /></li>
        </ul>

        <h2 id="section-5">V. Difficultés rencontrées et Solutions</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-zinc-800">
            <thead>
              <tr class="bg-zinc-900">
                <th class="border border-zinc-800 p-2">Difficulté</th>
                <th class="border border-zinc-800 p-2">Solution apportée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-zinc-800 p-2 font-bold text-white">Perte des routes au redémarrage</td>
                <td class="border border-zinc-800 p-2 text-zinc-400">Utilisation de la directive <strong>post-up</strong> dans le fichier interfaces.</td>
              </tr>
              <tr>
                <td class="border border-zinc-800 p-2 font-bold text-white">Absence de retour de ping</td>
                <td class="border border-zinc-800 p-2 text-zinc-400">Vérification et activation de l'IP Forwarding via le noyau.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="section-7">VII. Résultats et Tests de validation</h2>
        <p>Les tests ont confirmé le succès de l'interconnexion via Ping et Traceroute à travers les 3 sauts du réseau.</p>
      </div>
    `
  }
];