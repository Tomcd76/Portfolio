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
  context: string;
  objectives: string;
  description: string;
  tools: string[];
  difficulties?: string;
  results?: string;
  analysis?: string;
  evidence: Evidence[];
  skills?: string[]; // IDs of skills
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
    results: "Domaine fonctionnel. Les utilisateurs se connectent avec leurs identifiants et ont accès uniquement à leurs dossiers métiers.",
    analysis: "J'ai compris l'importance de bien structurer son AD dès le départ pour faciliter l'application des stratégies de groupe.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Mettre en place un domaine Active Directory, gérer les utilisateurs et sécuriser les partages via des GPO.pdf" }],
    skills: ["patrimoine", "projet"]
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
    results: "Tolérance aux pannes validée (RAID). Sauvegardes automatisées et restaurations testées avec succès.",
    analysis: "La règle du 3-2-1 pour les sauvegardes est primordiale. Un RAID n'est pas une sauvegarde, c'est une continuité de service.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Sécuriser une infrastructure avec RAID 5 Linux et Veeam Backup & Replication sur Windows Server 2019.pdf" }],
    skills: ["patrimoine", "projet"]
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
    results: "Les postes clients obtiennent correctement leur configuration IP et résolvent les noms de domaine locaux et externes.",
    analysis: "Maîtriser le DNS et le DHCP est la base absolue avant de déployer n'importe quel autre service réseau.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Déploiement des services DHCP et DNS.pdf" }],
    skills: ["patrimoine", "projet"]
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
    results: "Réseau segmenté et sécurisé. Accès externe fonctionnel vers le serveur Web via le NAT.",
    analysis: "La logique de filtrage par défaut (tout bloquer puis autoriser le strict nécessaire) est la meilleure approche de sécurité.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer pfSense avec 3 interfaces (LAN, WAN, DMZ).pdf" }],
    skills: ["patrimoine", "projet"]
  },
  {
    id: "form_fog",
    title: "Serveur de déploiement (FOG)",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Automatiser le déploiement de systèmes d'exploitation sur un parc de machines.",
    description: "L'objectif de ce TP était de mettre en place une solution de déploiement automatisée. Nous avons utilisé Windows Server 2019 pour les services d'infrastructure (DNS/DHCP) et FOG Server (sur Debian) pour la gestion des images. Cette architecture permet de cloner des postes de travail via le réseau grâce au protocole PXE.",
    tools: ["FOG Project", "Linux", "PXE", "TFTP", "Sysprep"],
    difficulties: "Problème de démarrage PXE sur les clients. Au départ, nous avions configuré 'undionly.kpxe' qui ne fonctionnait pas. Résolu en utilisant le fichier 'ipxe.efi' dans la configuration DHCP.",
    results: "Déploiement d'une salle de 15 PC réalisé en moins de 30 minutes au lieu d'une journée en manuel.",
    analysis: "L'industrialisation des déploiements est un gain de temps énorme pour un technicien système.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment déployer des images Windows 10 avec FOG et Windows Server 2019.pdf" }],
    skills: ["patrimoine", "projet", "service"]
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
    results: "Connexion VPN chiffrée fonctionnelle. Accès aux applications métiers via RDS sans installer les logiciels sur les postes distants.",
    analysis: "La sécurité des accès distants est critique. L'utilisation de certificats forts est indispensable.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Déploiement d'une infrastructure VPN mixte (Debian & Windows Server).pdf" }],
    skills: ["patrimoine", "projet", "service"]
  },
  {
    id: "form_supervision",
    title: "Supervision (Nagios, Zabbix)",
    type: "formation",
    context: "TP réalisé au Lycée Lamartine.",
    objectives: "Surveiller l'état de santé de l'infrastructure et être alerté en cas de panne.",
    description: "Pour ce TP, nous avons mis en place deux solutions de supervision. La première est Nagios Core, une référence pour la supervision, et la seconde est Zabbix, une solution moderne. L'objectif était de monitorer un serveur Windows Server 2019 ainsi que des hôtes Linux en configurant des seuils d'alerte.",
    tools: ["Nagios", "Zabbix", "SNMP", "Linux"],
    difficulties: "Problème de communication entre le serveur Zabbix et l'agent Zabbix sur les machines clientes. Il a fallu configurer correctement l'adresse IP du serveur dans le fichier de configuration de l'agent.",
    results: "Tableaux de bord opérationnels. Remontée d'alertes en temps réel lors de la simulation d'une coupure de service.",
    analysis: "La supervision permet d'être proactif plutôt que réactif face aux pannes.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer Nagios Core et Zabbix sur Linux.pdf" }],
    skills: ["patrimoine", "projet"]
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
    results: "Parc informatique inventorié automatiquement. Portail d'assistance fonctionnel pour les utilisateurs.",
    analysis: "GLPI est un outil central pour structurer le support informatique selon les bonnes pratiques ITIL.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer GLPI 10 sur une pile LAMP.pdf" }],
    skills: ["patrimoine", "projet"]
  },
  {
    id: "form_lamp_iis",
    title: "Serveurs Web (IIS & Apache)",
    type: "formation",
    context: "TP réalisé au campus Saint-Joseph.",
    objectives: "Héberger des applications Web sur des environnements Windows et Linux.",
    description: "Pour ce TP, nous avons configuré un serveur nommé SRV-WEB qui centralisait nos services d'hébergement. Voici les paramètres de base que nous avons respectés :\n• Nom du serveur : SRV-WEB\n• Adresse IP : 172.16.0.10\n• Masque de sous-réseau : 255.255.255.0 (/24)",
    tools: ["IIS 10", "Apache2", "MySQL", "PHP", "SSL/TLS"],
    difficulties: "Difficulté principale rencontrée lors de la mise en place du certificat SSL et du DNS local. Le site n'était pas accessible via le nom de domaine en local, nécessitant des ajustements de configuration.",
    results: "Sites Web accessibles en HTTPS. CMS fonctionnel et performant.",
    analysis: "Comprendre le fonctionnement des serveurs Web est essentiel, même pour un profil réseau, car de nombreuses applications métiers sont aujourd'hui full-web.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment déployer une infrastructure Web mixte IIS sur Windows Server 2019 et LAMP sous Debian.pdf" }],
    skills: ["patrimoine", "presence", "projet"]
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
    results: "Réduction significative du trafic indésirable. Navigation plus rapide et sécurisée pour les clients du réseau.",
    analysis: "Le filtrage DNS est une première ligne de défense très efficace et peu coûteuse en ressources.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Comment installer et configurer AdGuard Home pour sécuriser votre réseau Windows Server .pdf" }],
    skills: ["patrimoine", "projet"]
  },

  // --- ALTERNANCE (Gendarmerie) ---
  {
    id: "alt_acl",
    title: "Droits ACL sur partages",
    type: "alternance",
    context: "Alternance à la Gendarmerie Nationale (SOLC).",
    objectives: "Gérer de manière fine et sécurisée les accès aux dossiers partagés suite aux mutations du personnel.",
    description: "• Diagnostic des droits actuels sur les serveurs de fichiers Linux via SSH (`getfacl`).\n• Modification du groupe propriétaire (`chown`) selon la nouvelle affectation de l'utilisateur.\n• Application des permissions standards (`chmod 770`) et des droits ACL étendus (`setfacl -m`).\n• Vérification de la prise en compte des droits via les outils Samba (`smbstatus`).\n• Rédaction d'une procédure simplifiée pour les autres techniciens.",
    tools: ["Linux (Genbuntu)", "Samba", "SSH", "CLI (getfacl, setfacl)"],
    difficulties: "Conflits entre les permissions UNIX classiques et les ACL étendues. Résolu en appliquant systématiquement un masque ACL correct.",
    results: "Droits d'accès mis à jour rapidement sans compromettre la sécurité. Continuité de service assurée pour les utilisateurs mutés.",
    analysis: "La rigueur dans la gestion des droits est vitale en Gendarmerie pour garantir la confidentialité des données sensibles.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document" }],
    skills: ["habilitation", "regles", "traiter_res"]
  },
  {
    id: "alt_solaris",
    title: "Exploitation des tickets (Sol@ris)",
    type: "alternance",
    context: "Alternance à la Gendarmerie Nationale (SOLC).",
    objectives: "Assurer le support technique de niveau 1 et 2 pour les unités de gendarmerie du groupement.",
    description: "• Prise en charge des incidents via l'outil de ticketing interne (Sol@ris).\n• Diagnostic à distance (télémaintenance) ou par téléphone avec les utilisateurs.\n• Résolution d'incidents variés : problèmes de messagerie, pannes matérielles, accès réseau, déploiement de postes.\n• Escalade des tickets complexes vers le niveau 3 (national).\n• Clôture des tickets avec documentation de la résolution pour la base de connaissances.",
    tools: ["Sol@ris (ITSM)", "Outils de télémaintenance", "Active Directory"],
    difficulties: "Gérer les priorités lors des pics d'incidents. Résolu en appliquant une matrice de criticité (Impact/Urgence).",
    results: "Réduction du temps de traitement des tickets. Satisfaction des utilisateurs maintenue à un haut niveau.",
    analysis: "J'ai développé mon sens du contact utilisateur et ma capacité à vulgariser des concepts techniques lors du support téléphonique.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document" }],
    skills: ["collecter", "traiter_res", "traiter_app", "accompagner"]
  },
  {
    id: "alt_baie",
    title: "Restructuration baie réseau",
    type: "alternance",
    context: "Alternance à la Gendarmerie Nationale (SOLC).",
    objectives: "Assainir et optimiser la baie de brassage de l'atelier technique pour améliorer les débits et la maintenance.",
    description: "• Analyse de l'existant : câblage \"plat de nouilles\", switchs 100Mbps saturés.\n• Remplacement du switch principal par un équipement Gigabit (Allied Telesis).\n• Débrassage complet et rebrassage propre avec des câbles courts.\n• Mise en place d'un code couleur strict (Rouge=Internet, Bleu=Intranet, Vert=Téléphonie).\n• Étiquetage de toutes les rocades et mise à jour du schéma réseau sous Visio.",
    tools: ["Switchs Allied Telesis", "Câblage RJ45", "Microsoft Visio"],
    difficulties: "Intervention sur une baie en production. Résolu en planifiant l'opération en dehors des heures de forte activité et en préparant le plan de brassage à l'avance.",
    results: "Baie propre, documentée et évolutive. Débits multipliés par 10 pour les postes de l'atelier.",
    analysis: "La couche physique (Couche 1 OSI) est souvent négligée, mais un câblage propre est la base d'un réseau fiable et facile à dépanner.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document" }],
    skills: ["recenser", "planifier", "deployer"]
  },
  {
    id: "alt_samba",
    title: "Serveurs de fichiers Samba",
    type: "alternance",
    context: "Alternance à la Gendarmerie Nationale (SOLC).",
    objectives: "Mettre en place et maintenir des partages de fichiers sécurisés pour les différentes brigades.",
    description: "• Installation du service Samba sur des serveurs Linux (Genbuntu).\n• Configuration du fichier `smb.conf` (définition des partages, restrictions d'accès par IP ou par groupe).\n• Intégration du serveur Samba au domaine Active Directory pour l'authentification centralisée (Winbind/SSSD).\n• Optimisation des performances de transfert (tuning des buffers).\n• Mise en place de scripts de sauvegarde rsync pour les données partagées.",
    tools: ["Linux (Genbuntu)", "Samba", "Active Directory", "rsync"],
    difficulties: "Problèmes de mappage des UID/GID entre Windows et Linux. Résolu en configurant correctement le backend idmap dans Samba.",
    results: "Partages de fichiers performants, hautement disponibles et sécurisés, intégrés de manière transparente pour les postes Windows.",
    analysis: "L'interopérabilité Linux/Windows est un enjeu majeur en entreprise. Samba est un outil puissant mais qui demande une configuration minutieuse.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document" }],
    skills: ["deployer", "patrimoine", "sauvegardes"]
  },

  // --- STAGE (Hisis Informatique) ---
  {
    id: "stage_audit",
    title: "Audit Cyber (MaturiN, OPSIMS)",
    type: "stage",
    context: "Stage chez Hisis Informatique.",
    objectives: "Évaluer la maturité cybersécurité des infrastructures clients (EHPAD, Hôpitaux) et proposer des plans d'action.",
    description: "• Création d'un outil d'audit structuré sous Excel basé sur les référentiels ANSSI, MaturiN-SMS et OPSIMS.\n• Déplacement sur site client pour réaliser l'audit (interviews, vérifications techniques sur les serveurs et firewalls).\n• Analyse des points critiques : sauvegardes (règle 3-2-1), politique de mots de passe, gestion des accès, redondance.\n• Rédaction d'un rapport d'audit classant les vulnérabilités par niveau de criticité.\n• Présentation des préconisations (devis de remédiation) aux directeurs d'établissement.",
    tools: ["Excel", "Référentiels ANSSI", "MaturiN-SMS", "OPSIMS"],
    difficulties: "Vulgariser les risques cyber pour des directeurs d'EHPAD non-techniciens. Résolu en utilisant des analogies simples (ex: comparer un firewall à un vigile à l'entrée).",
    results: "Outil d'audit standardisé pour l'entreprise. Plusieurs clients ont validé des devis de sécurisation suite à ces audits.",
    analysis: "J'ai découvert l'aspect conseil et commercial du métier. La technique ne suffit pas, il faut savoir convaincre et expliquer les risques.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document" }],
    skills: ["analyser", "regles", "evaluer"]
  },
  {
    id: "stage_wifi",
    title: "Déploiement Wi-Fi Haute Densité",
    type: "stage",
    context: "Lors de ma deuxième semaine de stage au sein de HISIS Informatique, nous sommes intervenus à l’hôpital de Pont-de-Veyle.",
    objectives: "Remplacer une dizaine de bornes Wi-Fi obsolètes par des modèles de nouvelle génération afin d'améliorer la couverture et les débits.",
    description: `2. Identification du port (Méthode du "Link Flapping")
Le câblage étant déjà existant mais non étiqueté dans la baie de brassage, nous avons dû identifier chaque port manuellement.

Action sur le terrain : Déconnexion du câble RJ45 (assurant l’alimentation PoE) de l'ancienne borne.
Action sur le terminal (CLI) : Utilisation de la commande suivante pour observer quel port passait à l’état notconnect :

PDV-DC1-SW-3750-1# show interface status
Port      Name               Status       Vlan       Duplex  Speed Type
Gi2/0/11  AP-WIFI-RDC        connected    trunk      a-full a-1000 10/100/1000BaseTX
Gi2/0/12  IMPRIMANTE-ET1     connected    15         a-full  a-100 10/100/1000BaseTX
Gi2/0/13  AP-WIFI1           notconnect   trunk      auto    auto  10/100/1000BaseTX
Gi2/0/14  POSTE-ACCUEIL      connected    10         a-full  a-100 10/100/1000BaseTX

Note : Pour confirmer l'identification, nous avons rebranché la borne pour vérifier que l'état repassait bien en connected.

3. Configuration de l'interface (Passage en mode Trunk)
Une fois le port identifié (ex: Gi2/0/13), nous avons dû le reconfigurer pour qu'il puisse transporter plusieurs réseaux (VLANs) simultanément vers la borne Wi-Fi.

Commandes de configuration saisies :
PDV-DC1-SW-3750# configure terminal
PDV-DC1-SW-3750(config)# interface GigabitEthernet 2/0/13
# 1. Identification du port
PDV-DC1-SW-3750(config-if)# description AP-WIFI-NOUVELLE-GEN
# 2. Activation du mode Trunk (Standard 802.1Q)
PDV-DC1-SW-3750(config-if)# switchport trunk encapsulation dot1q
PDV-DC1-SW-3750(config-if)# switchport mode trunk
# 3. Affectation des VLANs (Management, Personnel, Public)
PDV-DC1-SW-3750(config-if)# switchport trunk native vlan 1
PDV-DC1-SW-3750(config-if)# switchport trunk allowed vlan 1,12,13
# 4. Optimisation pour la rapidité de connexion
PDV-DC1-SW-3750(config-if)# spanning-tree portfast trunk
PDV-DC1-SW-3750(config-if)# end
PDV-DC1-SW-3750# write memory

4. Installation physique et Tests de Roaming
Après la configuration logicielle, nous avons installé physiquement la nouvelle borne sur son support.

Pour valider l'installation, nous avons effectué des tests de roaming :
Procédure : Lancement d'un ping continu (ping -t) sur un smartphone connecté au réseau.
Objectif : Se déplacer d'une borne à une autre pour vérifier que le signal ne se coupe pas et que la nouvelle borne prend le relais de manière fluide (itinérance).`,
    tools: ["Switchs Cisco Catalyst 3750", "Switchs Aruba", "Bornes Wi-Fi", "CLI (Command Line Interface)"],
    difficulties: "Identification complexe de certains câbles en baie de brassage (une borne au RDC n'a pas pu être raccordée car le câble se confondait avec d'autres). Intervention en milieu hospitalier nécessitant de la discrétion.",
    results: "Installation et intégration réussie de la majorité des bornes. Nette amélioration de la couverture et de la fiabilité du réseau Wi-Fi constatée par les soignants.",
    analysis: "Cette intervention sur le terrain m'a permis de confronter la théorie (VLANs, CLI) à la réalité physique d'une infrastructure réseau existante. J'ai aussi appris l'importance de la traçabilité en rédigeant le rapport d'intervention.",
    evidence: [
      { label: "Rapport d'intervention (PDF)", type: "document", url: "#" }
    ],
    skills: ["recenser", "continuite", "traiter_res", "planifier", "tests", "deployer"]
  },
  {
    id: "stage_rustdesk",
    title: "Serveur RustDesk sur Proxmox",
    type: "stage",
    context: "Stage chez Hisis Informatique.",
    objectives: "Mettre en place une solution de prise en main à distance auto-hébergée (alternative à TeamViewer) pour le support technique.",
    description: "• Création d'une machine virtuelle (Debian 12) sur l'hyperviseur Proxmox VE.\n• Installation de Docker et Docker Compose sur la VM.\n• Déploiement des conteneurs RustDesk Server (hbbs et hbbr) via un fichier `docker-compose.yml`.\n• Configuration des règles de pare-feu (NAT/PAT) sur le routeur d'entreprise pour ouvrir les ports nécessaires (21115-21119).\n• Déploiement du client RustDesk préconfiguré (avec la clé publique du serveur) sur les postes techniciens.",
    tools: ["Proxmox VE", "Debian", "Docker", "RustDesk", "Firewall"],
    difficulties: "Problème de connexion des clients depuis l'extérieur. Résolu en corrigeant la règle NAT sur le port UDP 21116, indispensable pour le \"hole punching\".",
    results: "Solution de télémaintenance fonctionnelle, sécurisée (chiffrement de bout en bout) et sans coût de licence récurrent pour l'entreprise.",
    analysis: "L'auto-hébergement avec Docker permet de déployer rapidement des services tout en gardant la souveraineté sur les données.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document" }],
    skills: ["deployer", "patrimoine", "habilitation"]
  },
  {
    id: "stage_exchange",
    title: "Migration Exchange vers PowerShell",
    type: "stage",
    context: "Stage chez Hisis Informatique.",
    objectives: "Automatiser et fiabiliser la procédure de création et de migration des boîtes aux lettres Exchange.",
    description: "• Analyse des processus manuels de création de comptes via l'interface graphique (EAC).\n• Développement de scripts PowerShell utilisant le module ExchangeOnlineManagement.\n• Script 1 : Création d'utilisateurs en masse à partir d'un fichier CSV (Nom, Prénom, UPN, Licence).\n• Script 2 : Attribution automatique des droits (Full Access, Send As) sur des boîtes partagées.\n• Rédaction d'une documentation technique détaillée pour l'utilisation des scripts par les autres techniciens.",
    tools: ["PowerShell", "Exchange Online", "Microsoft 365", "CSV"],
    difficulties: "Gestion des erreurs lors de l'exécution des scripts (ex: UPN déjà existant). Résolu en ajoutant des blocs `try/catch` et des logs dans le script.",
    results: "Temps de création d'un lot d'utilisateurs divisé par 5. Réduction drastique des erreurs de saisie manuelles.",
    analysis: "L'automatisation via PowerShell est une compétence indispensable pour un administrateur système moderne. Cela libère du temps pour des tâches à plus forte valeur ajoutée.",
    evidence: [{ label: "Documentation technique (PDF)", type: "document" }],
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
    tools: ["Windows Server", "Active Directory", "Profils Itinérants", "GPO"],
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Centralisation_profils_itinerants.pdf" }]
  },
  {
    id: "scolaire_ada",
    title: "Interconnexion et Routage de l'Infrastructure ADA",
    type: "scolaire",
    context: "Projet de deuxième année",
    objectives: "Interconnexion complète du réseau national",
    description: "Dans le cadre du projet portant sur l'infrastructure du groupe ADA, j'ai réalisé l'interconnexion complète de leur réseau national, leur permettant une communication bidirectionnelle sécurisée entre les sièges sociaux.",
    tools: ["Linux Debian", "Routage", "Réseau"],
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Interconnexion_routage_ADA.pdf" }]
  }
];
