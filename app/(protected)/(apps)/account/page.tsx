import { ScrollArea } from "@/components/ui/scroll-area";
import AccountEditForm from "@/components/app/account/account-edit-form";
import { currentUser, currentUserAccounts } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";
// import SSOManagementPage from "@/components/app/account/sso-management";
import { AlertCircle, ChevronRight, Plus, X } from "lucide-react"

const AccountPage = async () => {
  const user = await currentUser();
  const userAccounts = await currentUserAccounts();
  const accounts = userAccounts?.accounts

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">SSO 帳號管理</h1>
      {/* <SSOManagementPage accounts={accounts ?? []} /> */}
      <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 text-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-yellow-700">
              請注意，綁定或解除綁定 SSO 帳號可能會影響您的登入方式。確保您始終至少保留一種登入方式。
            </p>
          </div>
        </div>
      </div>
    <AccountEditForm />
      
    </ScrollArea>
  );
}

export default AccountPage;
