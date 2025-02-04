export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      patients: {
        Row: {
          attorney: string | null;
          case_manager: string | null;
          claim_number: string;
          claims_adjustor: string | null;
          created_at: string | null;
          date_of_assessment: string;
          date_of_birth: string;
          date_of_disability: string | null;
          date_of_injury: string;
          diagnosis: string;
          employer: string;
          evaluator: string;
          first_name: string;
          gender: string;
          id: string;
          insurance_carrier: string;
          job_title: string;
          last_name: string;
          middle_name: string | null;
          other_physician: string | null;
          referring_physician: string;
          signed_consent: boolean;
          updated_at: string | null;
        };
        Insert: {
          attorney?: string | null;
          case_manager?: string | null;
          claim_number: string;
          claims_adjustor?: string | null;
          created_at?: string | null;
          date_of_assessment: string;
          date_of_birth: string;
          date_of_disability?: string | null;
          date_of_injury: string;
          diagnosis: string;
          employer: string;
          evaluator: string;
          first_name: string;
          gender: string;
          id?: string;
          insurance_carrier: string;
          job_title: string;
          last_name: string;
          middle_name?: string | null;
          other_physician?: string | null;
          referring_physician: string;
          signed_consent?: boolean;
          updated_at?: string | null;
        };
        Update: {
          attorney?: string | null;
          case_manager?: string | null;
          claim_number?: string;
          claims_adjustor?: string | null;
          created_at?: string | null;
          date_of_assessment?: string;
          date_of_birth?: string;
          date_of_disability?: string | null;
          date_of_injury?: string;
          diagnosis?: string;
          employer?: string;
          evaluator?: string;
          first_name?: string;
          gender?: string;
          id?: string;
          insurance_carrier?: string;
          job_title?: string;
          last_name?: string;
          middle_name?: string | null;
          other_physician?: string | null;
          referring_physician?: string;
          signed_consent?: boolean;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          address_line1: string | null;
          address_line2: string | null;
          city: string | null;
          created_at: string | null;
          fax: string | null;
          first_name: string | null;
          id: string;
          last_name: string | null;
          npi: string | null;
          organization: string | null;
          signature_details: string | null;
          state: string | null;
          updated_at: string | null;
          username: string | null;
          work_phone: string | null;
          zip: string | null;
        };
        Insert: {
          address_line1?: string | null;
          address_line2?: string | null;
          city?: string | null;
          created_at?: string | null;
          fax?: string | null;
          first_name?: string | null;
          id: string;
          last_name?: string | null;
          npi?: string | null;
          organization?: string | null;
          signature_details?: string | null;
          state?: string | null;
          updated_at?: string | null;
          username?: string | null;
          work_phone?: string | null;
          zip?: string | null;
        };
        Update: {
          address_line1?: string | null;
          address_line2?: string | null;
          city?: string | null;
          created_at?: string | null;
          fax?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          npi?: string | null;
          organization?: string | null;
          signature_details?: string | null;
          state?: string | null;
          updated_at?: string | null;
          username?: string | null;
          work_phone?: string | null;
          zip?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      surgeries: {
        Row: {
          created_at: string | null;
          id: string;
          patient_id: string;
          surgery_date: string | null;
          surgery_type: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          patient_id: string;
          surgery_date?: string | null;
          surgery_type: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          patient_id?: string;
          surgery_date?: string | null;
          surgery_type?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'surgeries_patient_id_fkey';
            columns: ['patient_id'];
            referencedRelation: 'patients';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      change_password:
        | {
            Args: {
              current_password: string;
              new_password: string;
            };
            Returns: Json;
          }
        | {
            Args: {
              user_id: string;
              current_password: string;
              new_password: string;
            };
            Returns: Json;
          };
      change_user_password: {
        Args: {
          current_plain_password: string;
          new_plain_password: string;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'buckets_owner_fkey';
            columns: ['owner'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey';
            columns: ['bucket_id'];
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
