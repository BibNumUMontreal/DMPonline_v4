class ConfirmationsController < Devise::ConfirmationsController

  protected

  def after_confirmation_path_for(resource_name, resource)
    locale_root_path
  end

end
