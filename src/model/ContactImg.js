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

/**
 * The ContactImg model module.
 * @module model/ContactImg
 * @version 1.0.0
 */
class ContactImg {
    /**
     * Constructs a new <code>ContactImg</code>.
     * @alias module:model/ContactImg
     */
    constructor() { 
        
        ContactImg.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactImg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactImg} obj Optional instance to populate.
     * @return {module:model/ContactImg} The populated <code>ContactImg</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactImg();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} data
 */
ContactImg.prototype['data'] = undefined;

/**
 * @member {String} name
 */
ContactImg.prototype['name'] = undefined;






export default ContactImg;

