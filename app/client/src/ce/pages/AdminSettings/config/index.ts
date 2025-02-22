import { ConfigFactory } from "pages/Settings/config/ConfigFactory";

import { config as GeneralConfig } from "@appsmith/pages/AdminSettings/config/general";
import { config as EmailConfig } from "pages/Settings/config/email";
import { config as MapsConfig } from "pages/Settings/config/googleMaps";
import { config as VersionConfig } from "pages/Settings/config/version";
import { config as AdvancedConfig } from "pages/Settings/config/advanced";
import { config as Authentication } from "@appsmith/pages/AdminSettings/config/authentication";
import { config as BrandingConfig } from "@appsmith/pages/AdminSettings/config/branding";
import { config as ProvisioningConfig } from "@appsmith/pages/AdminSettings/config/provisioning";
import { config as UserListing } from "@appsmith/pages/AdminSettings/config//userlisting";
import { config as AuditLogsConfig } from "@appsmith/pages/AdminSettings/config/auditLogsConfig";

ConfigFactory.register(GeneralConfig);
ConfigFactory.register(EmailConfig);
ConfigFactory.register(MapsConfig);
ConfigFactory.register(Authentication);
ConfigFactory.register(AdvancedConfig);
ConfigFactory.register(VersionConfig);
ConfigFactory.register(BrandingConfig);
ConfigFactory.register(ProvisioningConfig);
ConfigFactory.register(UserListing);
ConfigFactory.register(AuditLogsConfig);

export default ConfigFactory;
