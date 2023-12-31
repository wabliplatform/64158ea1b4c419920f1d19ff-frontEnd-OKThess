/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContactImg from './ContactImg';

/**
 * The Contact model module.
 * @module model/Contact
 * @version 1.0.0
 */
class Contact {
    /**
     * Constructs a new <code>Contact</code>.
     * @alias module:model/Contact
     * @param fullName {String} 
     * @param role {String} 
     * @param img {module:model/ContactImg} 
     * @param company {String} 
     * @param help {String} 
     * @param interaction {String} 
     * @param outcome {String} 
     * @param email {String} 
     * @param phone {Number} 
     */
    constructor(fullName, role, img, company, help, interaction, outcome, email, phone) { 
        
        Contact.initialize(this, fullName, role, img, company, help, interaction, outcome, email, phone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fullName, role, img, company, help, interaction, outcome, email, phone) { 
        obj['fullName'] = fullName;
        obj['role'] = role;
        obj['img'] = img;
        obj['company'] = company;
        obj['help'] = help;
        obj['interaction'] = interaction;
        obj['outcome'] = outcome;
        obj['email'] = email;
        obj['phone'] = phone;
    }

    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact} obj Optional instance to populate.
     * @return {module:model/Contact} The populated <code>Contact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('img')) {
                obj['img'] = ContactImg.constructFromObject(data['img']);
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('help')) {
                obj['help'] = ApiClient.convertToType(data['help'], 'String');
            }
            if (data.hasOwnProperty('interaction')) {
                obj['interaction'] = ApiClient.convertToType(data['interaction'], 'String');
            }
            if (data.hasOwnProperty('outcome')) {
                obj['outcome'] = ApiClient.convertToType(data['outcome'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Contact.prototype['_id'] = undefined;

/**
 * @member {String} fullName
 */
Contact.prototype['fullName'] = undefined;

/**
 * @member {String} role
 */
Contact.prototype['role'] = undefined;

/**
 * @member {module:model/ContactImg} img
 */
Contact.prototype['img'] = undefined;

/**
 * @member {String} company
 */
Contact.prototype['company'] = undefined;

/**
 * @member {String} help
 */
Contact.prototype['help'] = undefined;

/**
 * @member {String} interaction
 */
Contact.prototype['interaction'] = undefined;

/**
 * @member {String} outcome
 */
Contact.prototype['outcome'] = undefined;

/**
 * @member {String} email
 */
Contact.prototype['email'] = undefined;

/**
 * @member {Number} phone
 */
Contact.prototype['phone'] = undefined;






export default Contact;

