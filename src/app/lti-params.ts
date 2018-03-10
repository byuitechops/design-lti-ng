export interface LtiParams {
  oauth_consumer_key: string;
  oauth_signature_method: string;
  oauth_timestamp: string;
  oauth_nonce: string;
  oauth_version: string;
  accept_media_types: string;
  accept_multiple: string;
  accept_presentation_document_targets: string;
  accept_unsigned: string;
  auto_create: string;
  content_item_return_url: string;
  context_id: string;
  context_label: string;
  context_title: string;
  data: string;
  ext_lti_assignment_id: string;
  ext_roles: string;
  launch_presentation_document_target: string;
  launch_presentation_locale: string;
  lis_person_name_family: string;
  lis_person_name_full: string;
  lis_person_name_given: string;
  lti_message_type: string;
  lti_version: string;
  roles: string;
  tool_consumer_instance_guid: string;
  user_id: string;
  oauth_signature: string;
}
