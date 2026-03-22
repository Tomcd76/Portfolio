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
  // On met les "?" partout ici pour que les formats courts et longs cohabitent sans erreur
  context?: string;
  description?: string;
  tools?: string[];
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
    results: "Tolérance aux pannes validée (RAID). Sauvegardes automatisées et restaurations testées avec succès.",
    analysis: "La règle du 3-2-1 pour les sauvegardes est primordiale. Un RAID n'est pas une sauvegarde, c'est une continuité de service.",
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
    results: "Les postes clients obtiennent correctement leur configuration IP et résolvent les noms de domaine locaux et externes.",
    analysis: "Maîtriser le DNS et le DHCP est la base absolue avant de déployer n'importe quel autre service réseau.",
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
    results: "Réseau segmenté et sécurisé. Accès externe fonctionnel vers le serveur Web via le NAT.",
    analysis: "La logique de filtrage par défaut (tout bloquer puis autoriser le strict nécessaire) est la meilleure approche de sécurité.",
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
    results: "Connexion VPN chiffrée fonctionnelle. Accès aux applications métiers via RDS sans installer les logiciels sur les postes distants.",
    analysis: "La sécurité des accès distants est critique. L'utilisation de certificats forts est indispensable.",
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
    results: "Parc informatique inventorié automatiquement. Portail d'assistance fonctionnel pour les utilisateurs.",
    analysis: "GLPI est un outil central pour structurer le support informatique selon les bonnes pratiques ITIL.",
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
    difficulties: "Difficulté principale rencontrée lors de la mise en place du certificat SSL et du DNS local. Le site n'était pas accessible via le nom de domaine en local, nécessitant des ajustements de configuration.",
    results: "Sites Web accessibles en HTTPS. CMS fonctionnel et performant.",
    analysis: "Comprendre le fonctionnement des serveurs Web est essentiel, même pour un profil réseau, car de nombreuses applications métiers sont aujourd'hui full-web.",
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
    results: "Réduction significative du trafic indésirable. Navigation plus rapide et sécurisée pour les clients du réseau.",
    analysis: "Le filtrage DNS est une première ligne de défense très efficace et peu coûteuse en ressources.",
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
    tools: ["Windows Server", "Active Directory", "Profils Itinérants", "GPO"],
    skills: ["continuite", "deployer", "habilitation"],
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Configuration des profils itinérants sous Windows Server 2019.pdf" }]
  },
  {
    id: "scolaire_ada",
    title: "Interconnexion et Routage de l'Infrastructure ADA",
    type: "scolaire",
    context: "Projet de deuxième année",
    objectives: "Interconnexion complète du réseau national",
    description: "Dans le cadre du projet portant sur l'infrastructure du groupe ADA, j'ai réalisé l'interconnexion complète de leur réseau national, leur permettant une communication bidirectionnelle sécurisée entre les sièges sociaux.",
    tools: ["Linux Debian", "Routage", "Réseau"],
    skills: ["deployer", "exploiter", "planifier"],
    evidence: [{ label: "Documentation technique (PDF)", type: "document", url: "/Interconnexion et routage de l'infrastructure ADA.pdf" }]
  }
];