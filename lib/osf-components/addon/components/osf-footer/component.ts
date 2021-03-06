import { service } from '@ember-decorators/service';
import Component from '@ember/component';
import config from 'ember-get-config';
import { serviceLinks } from 'ember-osf-web/const/service-links';
import Analytics from 'ember-osf-web/services/analytics';
import styles from './styles';
import layout from './template';

export default class OsfFooter extends Component {
    layout = layout;
    styles = styles;

    @service analytics!: Analytics;

    serviceLinks = serviceLinks;
    supportEmail: string = config.support.supportEmail;
    currentYear: number = (new Date()).getUTCFullYear();

    constructor(properties: object) {
        super(properties);
        Object.assign(this, config.signUpPolicy, config.footerLinks);
    }
}
